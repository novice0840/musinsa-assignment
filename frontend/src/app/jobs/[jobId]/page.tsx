import { Button } from "@/components/ui/button";
import { CAREER_LIST } from "@/constants/career";
import Link from "next/link";
import React from "react";

interface JobsPageProps {
  params: {
    jobId: string;
  };
}

const JobsPage = ({ params }: JobsPageProps) => {
  const { jobId } = params;
  const career = CAREER_LIST.find((item) => item.id === parseInt(jobId));

  if (!career) {
    return (
      <div className="w-5xl mx-auto mt-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold">채용 공고를 찾을 수 없습니다</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-5xl mx-auto mt-24">
      <div className="flex gap-16">
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-3xl font-bold">{career.description}</h1>
          <div className="space-y-8">
            <h2 className="text-xl font-semibold">[29CM 소개]</h2>
            <div>
              29CM는 ​고객의 ​라이프 ​스타일에 어울리는 ​최적의 상품들을
              발견하고 소개하는 ​온/오프라인 ​셀렉트숍입니다. 2011년, ​'고객의
              더 나은 ​선택을 돕는다’라는 ​미션으로부터 ​출발한 후, ​2024년
              ​거래액 ​1조를 돌파했으며, 매년 ​두 ​자릿수의 성장률을 지속하며
              ​고속 ​성장 ​중입니다. 더 많고 ​더 저렴한 ​상품을 ​추구하는 다른
              ​기업들과 달리 ​우리는 ​29CM만의 방식이 담긴 ​콘텐츠를 선보이며
              ​브랜드와 고객 모두에게 대체 불가능한 커머스 플랫폼을 만들어가고
              있습니다.
            </div>
            <h2 className="text-xl font-semibold">[팀 소개]</h2>
            <div>
              29CM의 Commerce Core Engineering 실에는 Purchase & Post Purchase
              팀과 Sale Pricing 팀이 있으며, 고객이 상품과 가격을 확인하고 주문,
              결제한 순간부터 상품을 수령할 때까지 모든 여정을 책임지고
              있습니다. 우리는 상품, 쿠폰, 할인, 주문, 배송, 클레임 등 커머스의
              핵심 기능을 설계하고 운영하며, 기술 혁신과 빠른 도전을 통해 고객이
              29CM에서 최고의 쇼핑 경험을 할 수 있도록 끊임없이 고민하고 개선해
              나가고 있습니다. 우리가 하는 모든 일은 더 나은 고객 경험을 만들기
              위한 여정이며, 급변하는 이커머스 환경 속에서도 새로운 기술과
              아이디어로 한계를 돌파하는 것을 목표로 삼고 있습니다. 더 나은
              커머스 경험을 만들어가는 도전에 함께하고 싶다면, 지금 Commerce
              Core Engineering 실로 합류하세요!
            </div>
          </div>
        </div>
        <div className="w-64 flex flex-col gap-8">
          <div className="border p-4 rounded">
            <h3 className="font-semibold">구분</h3>
            <p>{career.subsidiary}</p>
          </div>
          <div className="border p-4 rounded flex flex-col gap-4">
            <div>
              <h3 className="font-semibold">직군</h3>
              <p>{career.occupation}</p>
            </div>

            <div>
              <h3 className="font-semibold">직무</h3>
              <p>{career.job}</p>
            </div>
            <div>
              <h3 className="font-semibold">경력</h3>
              <p>
                {career.career > 0
                  ? `경력 ${career.career}년 이상`
                  : "경력 무관"}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">고용형태</h3>
              <p>{career.employment}</p>
            </div>
            <div>
              <h3 className="font-semibold">근무지</h3>
              <p>{career.place}</p>
            </div>
          </div>
          <Link href={`/jobs/${jobId}/apply`}>
            <Button className="w-full">지원하기</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
