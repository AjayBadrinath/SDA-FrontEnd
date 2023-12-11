import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
  } from "@material-tailwind/react";
  import {
    PhoneIcon,
    EnvelopeIcon,
    CogIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/24/outline";
   
 function SpeedDialFn() {
    return (
      <div className=" z-100 h-5 w-10">
        <div className="absolute bottom-10 right-10">
          <SpeedDial>
            <SpeedDialHandler>
              <IconButton size="lg" variant="filled" color="orange" ripple={true} className=" rounded-full">
                <PhoneIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent>
              <SpeedDialAction className="m-auto">
                <EnvelopeIcon className=" h-5 w-15 m-auto" />
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>
      </div>
    );
  }
  export default SpeedDialFn;