"use client"
import Link from "next/link";
import { Heading, Text, Img } from "../components";

export default function Guest() {
    return (
      <>
          <title>Menna's Application1</title>
          <meta name="description" content="Web site created using create-react-app" />
        <div className="min-h-screen h-[982px] w-full  flex items-center bg-indigo-200 relative overflow-hidden">
          
          <div className="flex flex-row justify-between items-center w-[21%] right-[31%] top-[22%] m-auto absolute">
            <Img src="../../images/img_ball_3.png" alt="ballthreeone" className="w-[122px] object-cover" />
            <Img src="../../images/img_untitled2.png" alt="untitledtwoone" className="w-[59px] object-cover" />
          </div>
          <div className="flex flex-col items-end justify-start w-[77%] bottom-0 right-0 m-auto absolute">
            <div className="flex flex-col items-end justify-start w-[66%] z-[1]">
              <div className="flex flex-row justify-end items-start w-full">
                <div className="flex flex-row justify-end items-start w-[81%]">
                  <div className="flex flex-row justify-end w-[44%]">
                    <div className="h-[195px] w-full relative">
                      <Img 
                        src="../../images/img_spiral.png"
                        alt="spiraloneone"
                        className="justify-center h-[195px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Img
                        src="../../images/img_color_177x186.png"
                        alt="coloroneone_one"
                        className="h-[177px] w-[71%] top-0 right-0 left-0 m-auto object-cover absolute"
                      />
                      <Img
                        src="../../images/img_light.png"
                        alt="lightoneone_one"
                        className="justify-center h-[195px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-end w-[59%] ml-[-10px]">
                    <div className="h-[217px] w-full relative">
                      <Img
                        src="../../images/img_cylinder.png"
                        alt="cylinderoneone"
                        className="justify-center h-[217px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Img
                        src="../../images/img_color_168x257.png"
                        alt="colorthreeone"
                        className="h-[168px] w-[73%] top-0 right-0 left-0 m-auto opacity-0.9 object-cover absolute"
                      />
                      <Img
                        src="../../images/img_lights.png"
                        alt="lightsoneone"
                        className="justify-center h-[217px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                    </div>
                  </div>
                </div>
                <Img
                  src="../../images/img_ball_3_269x235.png"
                  alt="ballthreethree"
                  className="w-[32%] ml-[-85px] object-cover"
                />
              </div>
              <Img
                src="../../images/img_other_01_3.png"
                alt="other01three"
                className="w-1/2 mt-[-74px] mr-[52px] object-cover"
              />
            </div>
            <div className="flex flex-row justify-end items-start w-full mt-[-181px]">
              {/* <div className="h-[57px] w-[28%] mt-48 mb-[269px] z-[1] relative">
               <Link href='../login'> <Img
                  src="../../images/img_rectangle_36.svg"
                  alt="imageone_one"
                  className="justify-center h-[57px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-md"
                />
                <Heading
                  size="xl"
                  as="h1"
                  className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-gray-200_01 !font-inter text-center absolute"
                >
                  Log In
                </Heading></Link>
              </div> */}
              <div className="flex flex-row justify-end items-center w-[99%] ml-[-293px]">
                <div className="flex flex-row justify-end w-[34%] z-[1]">
                  <div className="h-[373px] w-full relative">
                    <Img
                      src="../../images/img_cone.png"
                      alt="coneoneone_one"
                      className="justify-center h-[373px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <Img
                      src="../../images/img_color_indigo_800.svg"
                      alt="colorfiveone"
                      className="justify-center h-[282px] w-[281px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    <Img
                      src="../../images/img_lights_373x377.png"
                      alt="lightsthreeone"
                      className="justify-center h-[373px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                  </div>
                </div>
                <div className="h-[828px] w-[81%] ml-[-161px] relative">
                  <div className="flex flex-row justify-between items-center w-[55%] h-max right-0 bottom-0 top-0 m-auto absolute">
                    <Img src="../../images/img_untitled.png" alt="untitledoneone" className="w-[134px] object-cover" />
                    <Img src="../../images/img_cone_289x254.png" alt="conethreeone" className="w-[52%] object-cover" />
                  </div>
                  <div className="justify-center h-[828px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img
                      src="../../images/img_ring.png"
                      alt="ringoneone_one"
                      className="h-[568px] w-full top-0 right-0 left-0 m-auto object-cover absolute"
                    />
                    <Img
                      src="../../images/img_color_red_300.svg"
                      alt="colorsevenone"
                      className="h-[726px] bottom-0 right-[5%] m-auto absolute"
                    />
                    <div className="h-[568px] w-full top-0 right-0 left-0 m-auto absolute">
                      <Img
                        src="../../images/img_light_568x912.png"
                        alt="lightthreeone"
                        className="justify-center h-[568px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="h-[141px] w-[141px] bottom-[27%] right-[2%] m-auto absolute">
                        <div className="justify-center h-[141px] w-[141px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <Img
                            src="../../images/img_glass.png"
                            alt="glassoneone_one"
                            className="justify-center h-[141px] w-[141px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <Img
                            src="../../images/img_color.svg"
                            alt="colornineone"
                            className="h-[93px] top-[14%] right-0 left-0 m-auto absolute"
                          />
                        </div>
                        <Img
                          src="../../images/img_light_141x141.png"
                          alt="lightfiveone"
                          className="justify-center h-[141px] w-[141px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="../../images/img_other_01_18.png"
            alt="other01eighteen"
            className="h-[395px] w-[24%] left-0 top-[18%] m-auto object-cover absolute"
          />
          <div className="flex flex-col items-start justify-start w-[82%] h-max left-0 bottom-0 top-0 m-auto absolute">
            <div className="flex flex-row justify-start w-[24%] ml-[419px] z-[1]">
              <div className="flex flex-row justify-start w-full">
                <div className="h-[218px] w-full relative">
                  <Img
                    src="../../images/img_cube.png"
                    alt="cubeoneone_one"
                    className="justify-center h-[218px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="../../images/img_color_173x203.png"
                    alt="colorelevenone"
                    className="h-[173px] w-[70%] top-0 right-0 left-0 m-auto object-cover absolute"
                  />
                  <div className="justify-center h-[218px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img
                      src="../../images/img_lights2.png"
                      alt="lightstwotwo"
                      className="justify-center h-[218px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <Img
                      src="../../images/img_lights1.png"
                      alt="lightsonetwo"
                      className="justify-center h-[218px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full mt-[-56px]">
              <Text size="7xl" as="p" className="ml-[358px] mt-[50px] mb-[30px] !text-black-900 !font-merienda z-[1]">
                Hello
              </Text>
              <div className="flex flex-row justify-start items-center w-full mt-[-122px]">
                <div className="flex flex-col items-center justify-start w-[36%] z-[1]">
                  <div className="h-[526px] w-full relative">
                    <Img
                      src="../../images/img_cones_2.png"
                      alt="conestwooneone"
                      className="justify-center h-[526px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <Img
                      src="../../images/img_colors.png"
                      alt="colorsoneone"
                      className="h-[481px] w-[85%] bottom-0 left-0 m-auto object-cover absolute"
                    />
                    <div className="justify-center h-[526px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img
                        src="../../images/img_lights_526x439.png"
                        alt="lightsfiveone"
                        className="justify-center h-[526px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Img
                        src="../../images/img_untitled.png"
                        alt="untitledthree"
                        className="h-[134px] w-[134px] bottom-0 right-[1%] m-auto object-cover absolute"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start w-[71%] ml-[-77px]">
                <div className="h-[57px] w-[37%] z-[1] mt-[70px] mb-[20px] relative">
                  <Link href='../login'><Img
                      src="../../images/img_rectangle_36.svg"
                      alt="imageoneone_one"
                      className="justify-center h-[57px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-md"
                    />
                    <Heading
                      size="xl"
                      as="h2"
                      className="w-max top-[6%] right-0 left-0 m-auto !text-gray-200_01 !font-inter text-center absolute"
                    >
                      Login

                    </Heading> </Link>
                  </div>
                  <div className="h-[57px] w-[37%] mt-[20px] mb-[20px] z-[1] relative">
                  <Link href='../signup'><Img
                      src="../../images/img_rectangle_36.svg"
                      alt="imageoneone_one"
                      className="justify-center h-[57px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-md"
                    />
                    <Heading
                      size="xl"
                      as="h2"
                      className="w-max top-[6%] right-0 left-0 m-auto !text-gray-200_01 !font-inter text-center absolute"
                    >
                      Sign Up

                    </Heading> </Link>
                  </div>
                  <div className="flex flex-row justify-start items-start w-full ">
                    <Heading as="h3" className="w-[36%] !text-gray-200_01 !font-inter z-[1] !leading-[35px]">
                      Are you ready to unlock the marketing magic that drives results? Dive in and unleash your
                      brand&#39;s full potential!
                    </Heading>
                    <Img src="../../images/img_marni_2.png" alt="marnitwooneone" className="w-4/5 ml-[-129px] object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            size="5xl"
            as="p"
            className="bottom-[39%] left-[33%] m-auto !text-gray-800 !font-inter text-center absolute"
          >
            or
          </Text>
          <Heading
            size="xl"
            as="h2"
            className="left-[6%] top-[2%] m-auto !text-indigo-400 !font-inter text-center absolute"
          >
            MarketMinds
          </Heading>
        
        </div>
      </>
    );
  }