//削除する↓
import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  return NextResponse.next(); // 何もしないが、エラーは回避できる
}

// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const origin = req.headers.get("origin"); // リクエストのオリジンを取得
//   const forwardedHost = req.headers.get("x-forwarded-host");//ポートフォワード機能を使用しているため、x-forwarded-hostにHTTPリクエスト情報が記載される
  
//   console.log(" Request Origin:", origin); //  `origin` をログで確認
//   console.log(` X-Forwarded-Host: ${forwardedHost}`);//'X-Forwarded-Host'　をログで確認
  
//   // 許可するオリジンを設定
//   const allowedOrigins = [
//     "https://stunning-eureka-g4x7v6vq6ww93v997-3000.app.github.dev",
//     "http://localhost:3000",
//   ];

//   // `Origin` が `null` の場合は `X-Forwarded-Host` を使う
//   const requestOrigin = origin !== null ? origin : `https://${forwardedHost}`;

//   // CORS ヘッダーの設定
//   const response = NextResponse.next();
//   if (allowedOrigins.includes(requestOrigin)) {
//     response.headers.set("Access-Control-Allow-Origin", requestOrigin);
//   } else {
//     response.headers.set("Access-Control-Allow-Origin", "null");
//   }
//   console.log("requestOrigin: "+ requestOrigin);

//   response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

//   return response;
// }

// export const config = {
//   matcher: ["/api/:path*","/dashboard/Invoices/:path*"], // API ルートのみに適用
// };
