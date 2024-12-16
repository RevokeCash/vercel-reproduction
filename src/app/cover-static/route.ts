import { generateOgImage, loadDataUrl } from '../generate';

// We cannot use [...slug]/open-graph-image.tsx because ridiculously Next App Router doesn't support this,
// even though it is listed as a supported feature in the documentation. 🤬
// https://github.com/vercel/next.js/issues/57349

export const dynamic = 'force-static';

export async function GET(req: Request) {
  const title = 'How To Revoke Token Approvals';
  const background = loadDataUrl(`public/cover.jpg`, 'image/jpeg');

  return generateOgImage({ title, background });
}
