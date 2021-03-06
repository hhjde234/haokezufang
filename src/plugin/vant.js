import {
  Cell,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  DropdownMenu,
  DropdownItem,
  Grid,
  GridItem,
  CellGroup,
  Search,
  Icon,
  IndexBar,
  IndexAnchor,
  NavBar,
  Toast,
  Button,
  Form,
  Field,
  SwipeCell,
  Card,
  Tag,
  Area,
  Picker,
} from "vant";
const element = [
  Cell,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  DropdownMenu,
  DropdownItem,
  Grid,
  GridItem,
  CellGroup,
  Search,
  Icon,
  IndexBar,
  IndexAnchor,
  NavBar,
  Toast,
  Button,
  Form,
  Field,
  SwipeCell,
  Card,
  Tag,
  Area,
  Picker,
];
export default function (Vue) {
  element.forEach((item) => Vue.use(item));
}
