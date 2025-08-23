# Command Bar Animation System

## How It Works

The command bar is a **floating overlay** that smoothly moves as you scroll.

## Position Variables

```javascript
const COMMAND_BAR_POSITION = {
    initial: {
        top: 20,    // 20% from top of screen
        left: 75,   // 75% from left (right side)
    },
    final: {
        top: 85,    // 85% from top (bottom)
        left: 50,   // 50% from left (center)
    }
}
```

## Animation Flow

1. **Page loads** → Command bar appears at initial position (top-right)
2. **User scrolls 100px** → Animation starts
3. **User scrolls 100px-800px** → Bar smoothly moves toward final position
4. **User scrolls 800px+** → Bar stays at final position (bottom-center)

## The Magic

- **Same variables** control both initial render and animation = perfect alignment
- **CSS transitions** make movement buttery smooth
- **Fixed positioning** keeps bar floating above page content
- **Linear interpolation** calculates positions between start/end points

## Code Structure

- `useEffect` sets initial position on page load
- `handleScroll` calculates current position based on scroll progress
- `progress = (scrollY - 100) / 700` determines how far along animation is
- CSS transitions handle the smooth movement between updates

**Result**: Zero positioning jumps, silky smooth animation! 🧈