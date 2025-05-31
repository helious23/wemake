import { useSearchParams } from "react-router";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

type ProductPaginationProps = {
  totalPages: number;
};

export default function ProductPagination({
  totalPages,
}: ProductPaginationProps) {
  // state를 사용하는 것이 아닌, url의 parameter를 사용하여 페이지 정보를 관리합니다.
  const [searchParams, setSearchParams] = useSearchParams();
  // url에서 가져온 page는 string 타입이므로, Number 타입으로 변환합니다.
  // 추후에 zod 사용하여 number 타입 validation 추가 예정
  const page = Number(searchParams.get("page") ?? 1);
  const onClick = (page: number) => {
    // url의 parameter 중 page 정보만 page 로 set
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Pagination>
        <PaginationContent>
          {page === 1 ? null : (
            <>
              <PaginationItem>
                <PaginationPrevious
                  to={`?page=${page - 1}`}
                  onClick={(event) => {
                    // 기존 Link 작동 시 새로고침 되므로 다른 parameter 정보를 유지하기 위해 이벤트 방지
                    event.preventDefault();
                    onClick(page - 1);
                  }}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  to={`?page=${page - 1}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onClick(page - 1);
                  }}
                >
                  {page - 1}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <PaginationLink
              to={`?page=${page}`}
              isActive
              onClick={(event) => {
                event.preventDefault();
                onClick(page);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
          {page === totalPages ? null : (
            <>
              <PaginationItem>
                <PaginationLink
                  to={`?page=${page + 1}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onClick(page + 1);
                  }}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
              {page + 1 === totalPages ? null : (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationNext
                  to={`?page=${page + 1}`}
                  onClick={(event) => {
                    event.preventDefault();
                    onClick(page + 1);
                  }}
                />
              </PaginationItem>
            </>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
