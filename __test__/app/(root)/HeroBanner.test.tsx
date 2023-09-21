import React from "react";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroBanner from "@/app/(root)/HeroBanner"; // 請根據您的文件路徑進行修改

test("renders HeroBanner component with content", () => {
  render(<HeroBanner />);

  // 檢查文字內容是否正確渲染
  expect(screen.getByText("請網這邊走 ThisWeb | 前端 x 轉職 x 提升競爭力")).toBeInTheDocument();
  expect(screen.getByText("幫助你從零開始學習網頁程式")).toBeInTheDocument();
  expect(screen.getByText("提供完整入門教學、JS 核心觀念講解，讓你快速上手網頁程式，學會前端核心技能，轉職更順利。")).toBeInTheDocument();

  // 檢查 Newsletter 組件是否存在
  expect(screen.getByTestId("newsletter")).toBeInTheDocument();

  // 檢查Image組件是否存在
  expect(screen.getByAltText("hero banner")).toBeInTheDocument();
});

