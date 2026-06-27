import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { validateContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const validation = validateContactPayload(body);

  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  if (!supabase) {
    return NextResponse.json(
      { error: "Contact service is not configured." },
      { status: 500 }
    );
  }

  const { error } = await supabase.from("contacts").insert({
    email: body.email,
    message: body.message,
    created_at: new Date().toISOString(),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
