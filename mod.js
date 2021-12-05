import { serve } from "https://deno.land/std@0.117.0/http/server.ts";
import { content_type } from "https://raw.githubusercontent.com/melhosseiny/git-fetch/main/media_types.js";

serve(async (request) => {
  const { pathname } = new URL(request.url);

  let response_body = await Deno.readFile(`.${pathname}`);

  return new Response(response_body, {
    status: 200,
    headers: new Headers({
      "content-type": content_type(pathname),
      "access-control-allow-origin": "*",
    })
  });
});
