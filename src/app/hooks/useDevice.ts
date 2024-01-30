import {useMediaQuery} from "@mui/material";

const useDevice = () => {

  let isMobile, isTablet, isDesktop, isDesktopLarge;
  isMobile = isTablet = isDesktop = isDesktopLarge = false;

  if (typeof window == 'undefined') return { isMobile, isTablet, isDesktop, isDesktopLarge };

  isMobile = useMediaQuery("only screen and (max-width : 767px)");
  isTablet = useMediaQuery(
    "only screen and (min-width : 768px) and (max-width : 1024px)"
  );
  isDesktop = useMediaQuery(
    "only screen and (min-width : 1025px) and (max-width : 2379px)"
  );
  isDesktopLarge = useMediaQuery("only screen and (min-width : 2380px)");

  return { isMobile, isTablet, isDesktop, isDesktopLarge };
};

export default useDevice;