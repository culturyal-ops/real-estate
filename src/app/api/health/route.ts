import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Check environment variables
    const envCheck = {
      DATABASE_URI: !!process.env.DATABASE_URI,
      PAYLOAD_SECRET: !!process.env.PAYLOAD_SECRET,
      NODE_ENV: process.env.NODE_ENV,
    };

    // Try to import payload config
    let payloadStatus = 'not tested';
    try {
      const configPromise = (await import('@/payload.config')).default;
      payloadStatus = 'config loaded';
      
      // Try to get payload instance
      const { getPayloadHMR } = await import('@payloadcms/next/utilities');
      const payload = await getPayloadHMR({ config: configPromise });
      payloadStatus = 'payload initialized';
      
      // Try a simple query
      const result = await payload.find({
        collection: 'properties',
        limit: 1,
      });
      payloadStatus = `database connected - ${result.totalDocs} properties`;
    } catch (error: any) {
      payloadStatus = `error: ${error.message}`;
    }

    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: envCheck,
      payload: payloadStatus,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 'error',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    }, { status: 500 });
  }
}
