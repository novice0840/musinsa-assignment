import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white border-b  shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">MUSINSA</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              홈
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              상품
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              브랜드
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              세일
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              로그인
            </Button>
            <Button size="sm">회원가입</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
