export async function GET(req: Request) {
  const url = new URL(req.url);
  return Response.json({
    method: "GET",
    path: url.pathname,
    query: Object.fromEntries(url.searchParams),
    note: "public echo",
  });
}