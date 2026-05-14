import { NextRequest, NextResponse } from 'next/server';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@/payload.config';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const payload = await getPayloadHMR({ config: configPromise });

    const lead = await payload.create({
      collection: 'leads',
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
        inquiryType: body.inquiryType || 'general',
        relatedListing: body.relatedListing,
        status: 'new',
      },
    });

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    );
  }
}
