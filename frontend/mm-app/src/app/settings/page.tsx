// import react from "React"
// import {Text,Img,Button,Heading} from "../components";
// import {Sidebar1} from "../components";
// export default function SettingsPage(){
// return(
// <div className="flex flex-row md:flex-col justify-start items-start w-full gap-9 md:gap-5 bg-white-A700">
// <Sidebarl className="w-[242px]h-screen top-0 bg-gray-100_03 !sticky overflow-auto"/>
// <div className="flex flex-row justify-start w-[81%]md:w-full mt-[15px]md:mt-0">
// <div className="flex flex-col items-center justify-start w-full gap-[23px]">
// <div className="flex flex-row justify-center w-[97%]md:w-full pb-[58px]md:pb-5 border-indigo-400_01 border border-solid bg-white-A700 rounded-[23px]">
// <div className="flex flex-col items-center justify-start w-full gap-[17px]">
// <div className="h-[229px]w-full relative">
// <div className="flex flex-col items-center justify-center h-[28px]w-[28px]bottom-0 right-[3%]m-auto border-gray-100 border border-solid absolute">
// <Img src="images/img_vector_gray_500.svg"alt="vectorthreeone"className="h-[6px]my-[9px]"/>
// </div>
// <div className="flex flex-col items-center justify-start h-[191px]w-[191px]bottom-0 left-[3%]m-auto absolute">
// <div className="flex flex-col items-center justify-center h-[191px]w-[191px]border-indigo-400_01 border border-solid bg-indigo-100 rounded-[95px]">
// <Img src="images/img_avatar_image_188x155.png"
// alt="avatarimageone"
// className="w-[82%]md:h-auto sm:w-full mt-px object-cover rounded-[61px]"/>
// </div>
// </div>
// <div className="flex flex-row justify-center w-full top-0 right-0 left-0 m-auto absolute">
// <div className="flex flex-row justify-center w-full">
// <div className="h-[163px]w-full rounded-tl-[23px]rounded-tr-[23px]border-indigo-400_01 border border-solid bg-indigo-400_01 shadow-2x1 relative">
// <div className="justify-center h-[163px]w-[93%]md:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tl-[23px]rounded-tr-[23px]rotate-[-32deg]border-indigo-400_01 border border-solid absolute">
// <Img
// src="images/img_ring_163x1085.png"
// alt="ringoneone_one"
// className="justify-center h-[163px]w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[23px]rounded-tl-[23px]object-cover absolute"
// /><Img
// src="images/img_color_red_300_163x879.png"
// alt="coloroneone_one"
// className="justify-center h-[163px]w-[82%]sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[23px]rounded-tl-[23px]object-cover absolute"
// />
// <div className="justify-center h-[163px]w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tl-[23px]rounded-tr-[23px]absolute">
// <Img
// src="images/ing_light_163x1085.png"
// alt="lightoneone_one"
// className="justify-center h-[163px]w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[23px]rounded-tl-[23px]object-cover absolute"
// >
// <div className="flex flex-row justify-between items-center w-[48%]h-max ml-[95px]left-[9%]bottom-0 top-0 my-auto md:ml-5 absolute">
// <div className="h-[159px]w-[32%]mb-[3px]relative">
// <div className="justify-center h-[159px]w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
// <Img
// src="images/img_glass_159x162.png"
// alt="glassoneone_one"
// className="justify-center h-[159px]w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[23px]rounded-tl-[23px]object-cover absolute"
// />
// <Img
// src="images/img_color_red_a400.svg"
// alt="colorthreeone"
// className="h-[104px]top-[14%]right-0 left-0 m-auto rounded-tr-[23px]rounded-tl-[23px]absolute"/>





// </div>

// src="images/img_light_159x162.png"
// alt="lightthreeone
// className="justify-center h-[159px]w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[23px]rounded-tl-[23px]object-cover absolute"
// </div>
// <Img
// src="images/img_untitled_98x156.png"
// alt="untitledoneone"
// className="w-[31%]md:h-auto rounded-tr-[23px]rounded-tl-[23px]object-cover"
// </div>
// </div>
// </div>
// <div className="h-[163px]w-[27%]sm:w-full right-0 bottom-0 top-0 my-auto rounded-tl-[23px]rounded-tr-[23px]rotate-[-171deg]border-indigo-400_01 border border-solid absolute">
// <Img
// src="images/img_spiral_163x307.png"
// alt="spiraloneone'
// className="justify-center h-[163px]w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[23px]rounded-tl-[23px]object-cover absolute"
// <Img
// src="images/img_color_163x218.png"
// alt="colorfiveone'
// className="justify-center h-[163px]w-[72%]sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[23px]rounded-tl-[23px]object-cover absolute"
// <Img
// src="images/img_light_163x307.png"
// alt="lightfiveone'
// className="justify-center h-[163px]w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-tr-[23px]rounded-t1-[23px]object-cover absolute"
// </div>
// </div>
// </div>
// </div>
// </div>
// kdiv className="flex flex-col items-start justify-start w-[92%]md:w-full gap-[11px]">
// <Heading size="8xl"as="h1"className="ml-0.5 md:ml-0 !text-indigo-900 !text-[37.43px]">
// Yara hassan
// </Heading>
// <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
// <div className-"flex flex-row justify-start items-center w-[27%]md:h-auto gap-2.5 border-white-A700 border border-solid">
// <div className="flex flex-col items-center justify-start h-[51px]w-[51px]p-2.5 bg-indigo-100 rounded-[25px]">
// <Img src="images/img_location.svg"alt="locationoneone"className="h-[31px]w-[31px]"/>
// </div>
// <Heading size="2x1"as="h2"className="!text-indigo-900 !text-[23.39px]">
// Cairo,Egypt
// </Heading>
// </div>
// <div className="flex flex-row justify-center w-[23%]md:w-full">
// <div className="h-[50px]w-full sm:w-full relative">
// <div className="flex flex-row justify-center w-max h-full md:h-auto sm:w-full left-0 bottom-0 right-0 top-0 m-auto border-white-A700 border border-solid absolute">
// <Button color="indigo_100"size="1g"shape="circle"className="w-[50px]">
// <Img src="images/i呢call.svE”/)
// </Button>
// </div>
// <Heading
// size="xl"
// a5="h3=
// className="w-max right-0 bottom-0 top-0 my-auto !text-indigo-900 !text-[22.66px]absolute"
// +20103456789""
// </Heading>
// </div>
// Idiv></div>







