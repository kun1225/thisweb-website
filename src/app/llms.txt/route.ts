import { NextResponse } from 'next/server';
import { getLLMsDescription } from '@/src/shared/api/apiLLMs';

export async function GET() {
  try {
    const data = await getLLMsDescription();
    console.log('🚀 ~ GET ~ data:', data);

    return new NextResponse(data?.description ?? '', {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error(error);

    const data = getStaticLLMsDescription();
    return new NextResponse(data, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  }
}

function getStaticLLMsDescription() {
  return `# ThisWeb (請網這邊走)

> ThisWeb（請網這邊走）是一個專注於前端學習、轉職與職涯提升的中文網站，致力於幫助初學者及想轉職成前端工程師的人快速學習扎實的基礎。

## Posts
- [零基礎一年轉職前端工程師](https://www.thisweb.dev/post/front-end-beginner-guide): 分享 ThisWeb 從零基礎自學、成功在一年內轉職成前端工程師的經驗，涵蓋學習規劃、實作練習、作品集準備、面試技巧，及常見問題與心態調整，為想轉職前端的人提供清晰的學習路徑和實用建議。
- [2025 前端框架怎麼選？](https://www.thisweb.dev/post/front-end-framework-comparison): 這篇文章簡明比較了 React、Vue 和 Angular 三大前端框架，從學習難易度、工作機會、資源豐富度到適合新手的選擇，幫助讀者根據自身需求挑選最合適的框架入門。
- [React 是什麼？](https://www.thisweb.dev/post/what-is-react): 這篇文章用簡單易懂的方式介紹 React 的基本概念、特色、安裝步驟與核心觀念，幫助新手快速入門並開始學習 React 前端開發。
- [前端工程師是什麼](https://www.thisweb.dev/post/what-is-frontend-developer): 介紹前端工程師的工作內容、薪資、必備技能與職涯發展，適合想了解或準備轉職前端的人參考。

## Products
- [前端轉職大補帖](https://www.thisweb.dev/product/frontend-guide): 前端轉職大補帖提供前端系統化學習地圖、精選資源、AI 指令包和社群支持，幫助自學者高效準備前端轉職，解決學習方向、實作、面試等常見難題。
  `;
}
