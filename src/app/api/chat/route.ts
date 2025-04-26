import { NextResponse } from 'next/server';

const codeSnippets = [
  "<pre>{JSON.parse('{hello:true},0,2}}</pre>",
  '<html><h1>head1</h1><h2>header2</h2>',
  '<strong>i am strong</strong>',
];

export async function POST() {
  try {
    // Get a random code snippet
    const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

    const response = {
      message: randomSnippet,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
