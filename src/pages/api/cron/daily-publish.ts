// Vercel Cron Job for daily publishing
// This triggers a Vercel redeploy to publish scheduled posts
export const prerender = false;

export async function GET(request: Request) {
    const authHeader = request.headers.get('authorization');

    // Verify cron secret (set in Vercel environment variables)
    if (authHeader !== `Bearer ${import.meta.env.CRON_SECRET}`) {
        return new Response('Unauthorized', { status: 401 });
    }

    // Trigger Vercel Deploy Hook
    const deployHookUrl = import.meta.env.VERCEL_DEPLOY_HOOK;

    if (!deployHookUrl) {
        return new Response('Deploy hook not configured', { status: 500 });
    }

    try {
        await fetch(deployHookUrl, { method: 'POST' });
        return new Response(JSON.stringify({
            success: true,
            message: 'Rebuild triggered',
            timestamp: new Date().toISOString()
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({
            success: false,
            error: 'Failed to trigger rebuild'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
