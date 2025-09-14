import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        console.log('🔍 Testing environment variable access...');
        
        // Check if environment variable exists
        const envVar = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
        
        if (!envVar) {
            res.status(200).json({
                success: false,
                error: 'Environment variable FIREBASE_SERVICE_ACCOUNT_KEY not found',
                available_vars: Object.keys(process.env).filter(key => key.includes('FIREBASE'))
            });
            return;
        }

        // Test JSON parsing
        let parsedJson;
        try {
            parsedJson = JSON.parse(envVar);
            console.log('✅ JSON parsing successful');
        } catch (parseError) {
            res.status(200).json({
                success: false,
                error: 'JSON parsing failed',
                parseError: parseError instanceof Error ? parseError.message : 'Unknown parse error',
                first_50_chars: envVar.substring(0, 50)
            });
            return;
        }

        // Verify expected JSON structure
        const requiredFields = ['type', 'project_id', 'private_key', 'client_email'];
        const missingFields = requiredFields.filter(field => !parsedJson[field]);
        
        if (missingFields.length > 0) {
            res.status(200).json({
                success: false,
                error: 'Missing required fields in service account JSON',
                missing_fields: missingFields,
                available_fields: Object.keys(parsedJson)
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: 'Environment variable and JSON parsing working correctly',
            project_id: parsedJson.project_id,
            client_email: parsedJson.client_email,
            has_private_key: !!parsedJson.private_key,
            service_account_type: parsedJson.type
        });
        
    } catch (error) {
        console.error('❌ Environment test error:', error);
        res.status(500).json({
            success: false,
            error: 'Test failed',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}