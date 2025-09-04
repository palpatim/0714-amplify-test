type Ctx = { params: Promise<{ sub: string }> };

export async function GET(req: Request, { params }: Ctx) {
  const url = new URL(req.url);
  const resolvedParams = await params;
  return Response.json({
    method: "GET",
    path: url.pathname,
    params: resolvedParams,
    query: Object.fromEntries(url.searchParams),
    note: "owner echo",
  });
}

export async function POST(req: Request, { params }: Ctx) {
  const url = new URL(req.url);
  const resolvedParams = await params;
  let body: unknown = null;
  try { body = await req.json(); } catch {}
  return Response.json({
    method: "POST",
    path: url.pathname,
    params: resolvedParams,
    query: Object.fromEntries(url.searchParams),
    body,
    note: "owner echo",
  });
}