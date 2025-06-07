export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

export const navigation: NavigationItem[] = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  {
    name: "Blogs",
    href: "https://blogs.anmolagrawal.dev",
    external: true,
  },
  { name: "Contact", href: "#contact" },
]; 