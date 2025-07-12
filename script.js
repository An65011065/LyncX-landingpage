// Header scroll effect
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Tab switching
document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        // Remove active class from all tabs and sections
        document
            .querySelectorAll(".tab")
            .forEach((t) => t.classList.remove("active"));
        document
            .querySelectorAll(
                ".chart-section, .network-section, .blocking-section",
            )
            .forEach((s) => s.classList.remove("active"));

        // Add active class to clicked tab
        tab.classList.add("active");

        // Show corresponding section
        const tabType = tab.dataset.tab;
        const section = document.getElementById(`${tabType}-section`);
        if (section) {
            section.classList.add("active");

            // Initialize network graph when network tab is clicked
            if (tabType === "network") {
                initNetworkGraph();
            }
        }
    });
});

// Create animated line chart
function createChart() {
    const svg = d3.select("#chart");
    const width = 600;
    const height = 200;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Sample data for productive vs leisure time throughout the day
    const data = [
        { hour: 9, productive: 45, leisure: 15 },
        { hour: 10, productive: 30, leisure: 30 },
        { hour: 11, productive: 50, leisure: 10 },
        { hour: 12, productive: 20, leisure: 40 },
        { hour: 13, productive: 15, leisure: 45 },
        { hour: 14, productive: 35, leisure: 25 },
        { hour: 15, productive: 40, leisure: 20 },
        { hour: 16, productive: 25, leisure: 35 },
        { hour: 17, productive: 30, leisure: 30 },
    ];

    const xScale = d3.scaleLinear().domain([9, 17]).range([0, innerWidth]);

    const yScale = d3.scaleLinear().domain([0, 60]).range([innerHeight, 0]);

    const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)
        .attr("class", "chart-area");

    // Line generators
    const productiveLine = d3
        .line()
        .x((d) => xScale(d.hour))
        .y((d) => yScale(d.productive))
        .curve(d3.curveCatmullRom);

    const leisureLine = d3
        .line()
        .x((d) => xScale(d.hour))
        .y((d) => yScale(d.leisure))
        .curve(d3.curveCatmullRom);

    // Area generators for gradient fills
    const productiveArea = d3
        .area()
        .x((d) => xScale(d.hour))
        .y0(innerHeight)
        .y1((d) => yScale(d.productive))
        .curve(d3.curveCatmullRom);

    const leisureArea = d3
        .area()
        .x((d) => xScale(d.hour))
        .y0(innerHeight)
        .y1((d) => yScale(d.leisure))
        .curve(d3.curveCatmullRom);

    // Add gradient areas
    g.append("path")
        .datum(data)
        .attr("d", productiveArea)
        .attr("fill", "url(#productiveGradient)")
        .attr("class", "chart-area");

    g.append("path")
        .datum(data)
        .attr("d", leisureArea)
        .attr("fill", "url(#leisureGradient)")
        .attr("class", "chart-area");

    // Add lines
    g.append("path")
        .datum(data)
        .attr("d", productiveLine)
        .attr("class", "chart-line productive-line");

    g.append("path")
        .datum(data)
        .attr("d", leisureLine)
        .attr("class", "chart-line leisure-line");

    // Add axes
    g.append("g")
        .attr("transform", `translate(0,${innerHeight})`)
        .call(d3.axisBottom(xScale).tickFormat((d) => `${d}:00`))
        .attr("class", "chart-area");

    g.append("g")
        .call(d3.axisLeft(yScale).tickFormat((d) => `${d}m`))
        .attr("class", "chart-area");

    // Add data points
    g.selectAll(".productive-dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "productive-dot chart-area")
        .attr("cx", (d) => xScale(d.hour))
        .attr("cy", (d) => yScale(d.productive))
        .attr("r", 4)
        .attr("fill", "var(--productive)")
        .attr("stroke", "white")
        .attr("stroke-width", 2);

    g.selectAll(".leisure-dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "leisure-dot chart-area")
        .attr("cx", (d) => xScale(d.hour))
        .attr("cy", (d) => yScale(d.leisure))
        .attr("r", 4)
        .attr("fill", "var(--leisure)")
        .attr("stroke", "white")
        .attr("stroke-width", 2);
}

// Initialize network graph
function initNetworkGraph() {
    const svg = d3.select("#network-svg");
    svg.selectAll("*").remove(); // Clear previous graph

    const width = 600;
    const height = 400;

    // Sample network data
    const nodes = [
        { id: "gmail", name: "Gmail", group: "work", visits: 15 },
        {
            id: "youtube",
            name: "YouTube",
            group: "leisure",
            visits: 25,
        },
        { id: "github", name: "GitHub", group: "work", visits: 12 },
        {
            id: "twitter",
            name: "Twitter",
            group: "social",
            visits: 8,
        },
        {
            id: "reddit",
            name: "Reddit",
            group: "social",
            visits: 6,
        },
        {
            id: "docs",
            name: "Google Docs",
            group: "work",
            visits: 10,
        },
        { id: "slack", name: "Slack", group: "work", visits: 18 },
        {
            id: "netflix",
            name: "Netflix",
            group: "leisure",
            visits: 5,
        },
    ];

    const links = [
        { source: "gmail", target: "docs", strength: 0.8 },
        { source: "gmail", target: "slack", strength: 0.6 },
        { source: "github", target: "docs", strength: 0.5 },
        { source: "twitter", target: "youtube", strength: 0.7 },
        { source: "reddit", target: "youtube", strength: 0.4 },
        { source: "slack", target: "github", strength: 0.3 },
        { source: "youtube", target: "netflix", strength: 0.2 },
    ];

    const colorScale = {
        work: "#4285f4",
        leisure: "#ff6b6b",
        social: "#ffa726",
    };

    // Create force simulation
    const simulation = d3
        .forceSimulation(nodes)
        .force(
            "link",
            d3
                .forceLink(links)
                .id((d) => d.id)
                .distance(80),
        )
        .force("charge", d3.forceManyBody().strength(-200))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(25));

    // Create links
    const link = svg
        .append("g")
        .selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .attr("class", "network-link")
        .attr("stroke-width", (d) => Math.sqrt(d.strength * 10));

    // Create nodes
    const node = svg
        .append("g")
        .selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("class", "network-node")
        .attr("r", (d) => Math.sqrt(d.visits) + 3)
        .attr("fill", (d) => colorScale[d.group])
        .call(
            d3
                .drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended),
        );

    // Add labels
    const labels = svg
        .append("g")
        .selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .attr("class", "network-label")
        .text((d) => d.name)
        .attr("dy", -15);

    // Add tooltips
    node.append("title").text((d) => `${d.name}: ${d.visits} visits`);

    // Update positions on simulation tick
    simulation.on("tick", () => {
        link.attr("x1", (d) => d.source.x)
            .attr("y1", (d) => d.source.y)
            .attr("x2", (d) => d.target.x)
            .attr("y2", (d) => d.target.y);

        node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

        labels.attr("x", (d) => d.x).attr("y", (d) => d.y);
    });

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
}

// Intersection Observer for story sections
const observerOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Trigger specific animations
            if (entry.target.id === "section1") {
                animateCounter();
            }
        }
    });
}, observerOptions);

// Observe all story sections
document.querySelectorAll(".story-section").forEach((section) => {
    observer.observe(section);
});

// Counter animation
function animateCounter() {
    const counter = document.getElementById("counter1");
    let count = 0;
    const target = 187; // Average daily browsing time
    const increment = target / 100;

    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        counter.textContent = Math.floor(count) + " minutes";
    }, 30);
}

// Initialize chart when page loads
setTimeout(() => {
    createChart();
    document.querySelector(".big-time").style.opacity = "1";
}, 2000);

// Simulate real-time updates
let timeCounter = 107; // 1h 47m in minutes
setInterval(() => {
    timeCounter++;
    const hours = Math.floor(timeCounter / 60);
    const minutes = timeCounter % 60;
    const timeString = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    document.getElementById("timeCounter").textContent = timeString;
}, 5000);

// Add some interactive hover effects
document.querySelectorAll(".chrome-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
        dot.style.transform = "scale(0.8)";
        setTimeout(() => {
            dot.style.transform = "scale(1)";
        }, 150);
    });
});

// Simulate AI response after delay
setTimeout(() => {
    const aiMessage = document.querySelector(".chat-message.ai .message-text");
    if (aiMessage) {
        aiMessage.innerHTML = `
      <div style="background: var(--light-gray); padding: 12px 16px; border-radius: 18px 18px 18px 4px; font-size: 14px; line-height: 1.4;">
        I noticed you visit YouTube 73% more often after checking Gmail. This usually happens around 2-3 PM when your energy dips. Try setting a 25-minute focus timer after email to break this pattern.
      </div>
    `;
        aiMessage.style.animation = "none";
    }
}, 4000);

// Extensions stack animation - using the exact same logic as original stacks.html
const extensionsLayers = document.querySelectorAll("#extensions-stack .layer");
const extensionsContent = document.getElementById("stack-content");

const extensionsData = [
    {
        title: "Website Blocker",
        text: "Block distracting websites with smart scheduling and focus modes",
    },
    {
        title: "Time Tracker",
        text: "Monitor your browsing habits with detailed analytics and insights",
    },
    {
        title: "Tab Manager",
        text: "Organize and manage your tabs efficiently with powerful tools",
    },
    {
        title: "Focus Timer",
        text: "Stay productive with Pomodoro timers and break reminders",
    },
    {
        title: "AI Assistant",
        text: "Get instant summaries and insights about your browsing patterns",
    },
    {
        title: "Note Taking",
        text: "Capture thoughts and ideas directly from any webpage",
    },
    {
        title: "Search History",
        text: "Find and revisit your browsing history with intelligent search",
    },
    {
        title: "Quick Actions",
        text: "Perform common tasks with keyboard shortcuts and gestures",
    },
    {
        title: "Analytics",
        text: "Deep insights into your digital habits and productivity patterns",
    },
    {
        title: "All-in-One",
        text: "Experience the power of 10+ extensions unified in one seamless tool",
    },
    {
        title: "Converge",
        text: "All paths lead to mastery - the journey completes",
    },
];

let currentExtensionLayer = 9;
let isExtensionsConverging = false;
let hasExtensionsConverged = false;

function updateExtensionsLayers() {
    extensionsLayers.forEach((layer, index) => {
        layer.classList.toggle("active", index === currentExtensionLayer);
    });

    extensionsContent.innerHTML = `
        <h3>${extensionsData[currentExtensionLayer].title}</h3>
        <hr>
        <p>${extensionsData[currentExtensionLayer].text}</p>
    `;
}

function startExtensionsConvergence(progress = 0) {
    // progress goes from 0 to 1 as we scroll through the convergence zone

    extensionsLayers.forEach((layer, index) => {
        layer.classList.add("converging");

        // Disable CSS transitions and animations to prevent conflicts
        layer.style.transition = "none";
        layer.style.animation = "none";

        if (index === 0) {
            // Layer 0 is visually at the top due to column-reverse
            // It needs to move down to the middle (positive Y)
            const layerHeight = parseFloat(getComputedStyle(layer).height) + 2;
            const moveDistance = progress * -4.5 * layerHeight; // Move down (reversed)
            layer.style.transform = `translateY(${moveDistance}px)`;
            layer.style.opacity = Math.max(0.5, 1 - progress * 0.3);
        } else if (index === 9) {
            // Layer 9 is visually at the bottom due to column-reverse
            // It needs to move up to the middle (negative Y)
            const layerHeight = parseFloat(getComputedStyle(layer).height) + 2;
            const moveDistance = progress * 4.5 * layerHeight; // Move up (reversed)
            layer.style.transform = `translateY(${moveDistance}px)`;
            layer.style.opacity = Math.max(0.5, 1 - progress * 0.3);
        } else {
            // Middle layers gradually fade out
            const fadeProgress = Math.min(1, progress * 1.5); // Fade at moderate speed
            layer.style.opacity = Math.max(0, 1 - fadeProgress);
            layer.style.transform = `scale(${1 - fadeProgress * 0.1})`;
        }
    });

    // Update content to show convergence when halfway through
    if (progress > 0.5 && currentExtensionLayer !== 10) {
        currentExtensionLayer = 10;
        extensionsContent.innerHTML = `
            <h3>${extensionsData[currentExtensionLayer].title}</h3>
            <hr>
            <p>${extensionsData[currentExtensionLayer].text}</p>
        `;
    }
}

function handleExtensionsScroll() {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const totalScrollHeight = document.body.scrollHeight - windowHeight;

    if (totalScrollHeight > 0) {
        const scrollPercent = Math.min(scrollTop / totalScrollHeight, 1);

        // Check if we're in the convergence zone (last 10% of scroll)
        if (scrollPercent > 0.9) {
            isExtensionsConverging = true;
            hasExtensionsConverged = true;
            // Calculate progress within the convergence zone (0 to 1)
            const convergenceProgress = Math.abs(-(scrollPercent - 0.9) / 0.1);
            startExtensionsConvergence(convergenceProgress);
            return;
        }

        // Reset convergence state if we scroll back up
        if (isExtensionsConverging && scrollPercent <= 0.9) {
            isExtensionsConverging = false;
            extensionsLayers.forEach((layer) => {
                layer.classList.remove("converging");
                layer.style.transform = "";
                layer.style.opacity = "";
                layer.style.transition = "";
                // Keep animation disabled if we've converged before
                if (hasExtensionsConverged) {
                    layer.style.animation = "none";
                } else {
                    layer.style.animation = "";
                }
            });
        }

        // Normal layer progression for the first 90% of scroll
        if (!isExtensionsConverging) {
            const adjustedPercent = scrollPercent / 0.9; // Scale to 0-1 for first 90%
            const newLayer = 9 - Math.floor(adjustedPercent * 10);

            if (
                newLayer !== currentExtensionLayer &&
                newLayer >= 0 &&
                newLayer < 10
            ) {
                currentExtensionLayer = newLayer;
                updateExtensionsLayers();
            }
        }
    }
}

// Initialize extensions stack
window.addEventListener("scroll", handleExtensionsScroll);
updateExtensionsLayers();
