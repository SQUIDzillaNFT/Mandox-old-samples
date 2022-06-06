import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function ScrollTopContainer() {
  const routePath = useLocation();
  const onTop = () => {
    console.log("Test***");
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  return null;
}
