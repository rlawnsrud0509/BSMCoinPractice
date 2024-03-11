import { SvgProptypes } from "@/types/svg/SvgProptypes";

const Triangle = ({
  width,
  height,
  degree = 0,
  backgroundColor = "black",
}: SvgProptypes) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`rotate(${degree})`}
    >
      <path
        d="M12 1.67001C11.4991 1.66995 11.0066 1.79903 10.57 2.04479C10.1335 2.29054 9.76775 2.64468 9.50799 3.07301L1.39799 16.61C1.14039 17.0505 1.00295 17.5508 0.999429 18.0611C0.995904 18.5713 1.12641 19.0735 1.37791 19.5175C1.6294 19.9614 1.99306 20.3316 2.4325 20.5909C2.87195 20.8502 3.37178 20.9895 3.88199 20.995H20.107C20.6168 20.9914 21.1167 20.8542 21.5568 20.5969C21.9969 20.3397 22.3619 19.9715 22.6152 19.5291C22.8685 19.0868 23.0013 18.5857 23.0004 18.0759C22.9995 17.5661 22.8649 17.0655 22.61 16.624L14.494 3.07801C14.2345 2.64866 13.8686 2.29351 13.4317 2.04686C12.9948 1.80022 12.5017 1.67042 12 1.67001Z"
        fill={`${backgroundColor}`}
      />
    </svg>
  );
};

export default Triangle;