import * as ScreenOrientation from 'expo-screen-orientation';






// const currentOrientation = await ScreenOrientation.getOrientationAsync();

// export function goodOrientation(){
// ScreenOrientation.addOrientationChangeListener((liveOrientation) => 
//     {
//   if (liveOrientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT) {
//     // Lock the screen orientation to landscape left
//     ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
//   }
//   else if (liveOrientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT) {
//     // Lock the screen orientation to landscape right
//     ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
//   }
//   else{
//     ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
//   }
  
// });
// }



export async function goodOrientation(){
  await ScreenOrientation.unlockAsync()
ScreenOrientation.addOrientationChangeListener((liveOrientation) => 
    {

  if (liveOrientation.orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT) {
    // Lock the screen orientation to landscape left
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  }
  else if (liveOrientation.orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT) {
    // Lock the screen orientation to landscape right
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  }
  else{
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }
}
);
}


// export function goodOrientation() {
//   const subscription = ScreenOrientation.addOrientationChangeListener(
//     (event) => {
//       const orientation = event.orientationInfo.orientation;

//       if (orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT) {
//         ScreenOrientation.lockAsync(
//           ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
//         );
//       } else if (orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT) {
//         ScreenOrientation.lockAsync(
//           ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
//         );
//       } else {
//         ScreenOrientation.lockAsync(
//           ScreenOrientation.OrientationLock.PORTRAIT
//         );
//       }
//     }
//   );

// return () => {
//   ScreenOrientation.removeOrientationChangeListener(subscription);
// };
// }




