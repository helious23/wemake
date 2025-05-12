import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "~/common/components/ui/navigation-menu";
import { Separator } from "~/common/components/ui/separator";
import { cn } from "~/lib/utils";

const menus = [
  {
    name: "Products",
    to: "/products",
    items: [
      {
        name: "Leaderboards",
        description: "커뮤니티의 최고 실력자들을 확인해보세요",
        to: "/products/leaderboards",
      },
      {
        name: "Categories",
        description: "제품을 위한 카테고리를 생성하고 관리하세요",
        to: "/products/categories",
      },
      {
        name: "Search",
        description: "커뮤니티의 제품을 검색해보세요",
        to: "/products/search",
      },
      {
        name: "Submit",
        description: "커뮤니티에 새로운 제품을 등록하세요",
        to: "/products/submit",
      },
      {
        name: "Promote",
        description: "커뮤니티에 당신의 제품을 홍보하세요",
        to: "/products/promote",
      },
    ],
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "RemoteJobs",
        description: "커뮤니티의 원격 근무 일자리를 찾아보세요",
        to: "/jobs?location=remote",
      },
      {
        name: "Full-Time Jobs    ",
        description: "커뮤니티의 정규직 일자리를 찾아보세요",
        to: "/jobs?type=full-time",
      },
      {
        name: "Freelance Jobs",
        description: "커뮤니티의 프리랜서 일자리를 찾아보세요",
        to: "/jobs?type=freelance",
      },
      {
        name: "Internships",
        description: "커뮤니티의 인턴십 기회를 찾아보세요",
        to: "/jobs?type=internship",
      },
      {
        name: "Submit a Job",
        description: "커뮤니티에 새로운 채용 공고를 등록하세요",
        to: "/jobs/submit",
      },
    ],
  },

  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All Posts",
        description: "커뮤니티의 모든 게시물을 확인하세요",
        to: "/community",
      },
      {
        name: "Top Posts",
        description: "커뮤니티의 인기 게시물을 확인하세요",
        to: "/community?sort=top",
      },
      {
        name: "New Posts",
        description: "커뮤니티의 최신 게시물을 확인하세요",
        to: "/community?sort=new",
      },
      {
        name: "Create a Post",
        description: "커뮤니티에 새로운 게시물을 작성하세요",
        to: "/community/create",
      },
    ],
  },
  {
    name: "IdeasGPT",
    to: "/ideas",
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        description: "우리 커뮤니티의 모든 팀을 확인하세요",
        to: "/teams",
      },
      {
        name: "Create a Team",
        description: "우리 커뮤니티에 새로운 팀을 만드세요",
        to: "/teams/create",
      },
    ],
  },
];
export default function Navigation() {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div className="flex items-center">
        <Link to="/" className="font-bold tracking-tighter text-lg">
          wemake
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <Link to={menu.to}>
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] font-light gap-3 p-4 grid-cols-2">
                        {menu.items?.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn([
                              "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent ",
                              (item.to === "/products/promote" ||
                                item.to === "/jobs/submit") &&
                                `col-span-2 bg-primary/10 [&_a]:hover:bg-primary/20 [&_a]:focus:bg-primary/20`,
                            ])}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                className="p-3  space-y-1 block leading-none no-underline outline-none"
                                to={item.to}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {item.name}
                                </span>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
