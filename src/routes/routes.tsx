import React, { useEffect } from "react";
import { Navigate, useLocation, RouteObject } from "react-router-dom";
import LocalStorageService from "data/LocalStorage.service";

import Landing from "pages/Immigration";
import { WorkStudyVisa } from "pages/LearningPages";
// const RequireAuth = ({ children }: { children: JSX.Element }) => {
//   const [user, setUser] = React.useState(LocalStorageService.getCachedData("USER"));
//   useEffect(() => {
//     setUser(LocalStorageService.getCachedData("USER"));
//     console.log(user);
//   }, [LocalStorageService]);

//   let location = useLocation();

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />; // redirect the user to the /login page, but save the current location the user were. this allows us to send the user back to the page them after they login, which is nicer user experience than drop them off on home page
//   }
//   return children;
// };

// route structure

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/study-in-australia/university/visa-service",
    element: <WorkStudyVisa />,
  },
  // {
  //   path: "/backend",
  //   element: <Backend />,
  // },
  // {
  //   path: "/selfintro",
  //   element: <Profilio />,
  // },
  // {
  //   path: "/mainentrance",
  //   element: SuspenseWrapper(() => {
  //     // a functional component is required here instead of a JSX tag

  //     return (
  //       <RequireAuth>
  //         <MainEntrance />
  //       </RequireAuth>
  //     );
  //   }, <FallbackLoading />),
  //   children: [
  //     {
  //       // index: true,
  //       path: "/mainentrance/dashboardindex",
  //       element: SuspenseWrapper(DashboardIndex, <FallbackLoading />),
  //     },
  //     {
  //       // index: true,
  //       path: "/mainentrance/ordermanagement",
  //       element: SuspenseWrapper(OrderManagment, <FallbackLoading />),
  //     },
  //     {
  //       path: "/mainentrance/warehousing/instock/",
  //       element: SuspenseWrapper(WareHousingInbound, <FallbackLoading />),
  //     },
  //     {
  //       path: "/mainentrance/warehousing/melstock",
  //       element: SuspenseWrapper(WareHousingMel, <FallbackLoading />),
  //     },
  //     {
  //       path: "/mainentrance/warehousing/bristock",
  //       element: SuspenseWrapper(WareHousingMel, <FallbackLoading />),
  //     },
  //     {
  //       path: "/mainentrance/fabrication/index",
  //       element: SuspenseWrapper(FabricationIndex, <FallbackLoading />),
  //       children: [
  //         {
  //           index: true,
  //           path: "/mainentrance/fabrication/index/powdercoating",
  //           element: SuspenseWrapper(PowderCoating, <FallbackLoading />),
  //         },
  //         {
  //           path: "/mainentrance/fabrication/index/workshop",
  //           element: SuspenseWrapper(Workshop, <FallbackLoading />),
  //         },
  //       ],
  //     },
  //     {
  //       path: "/mainentrance/fabrication/customize",
  //       element: SuspenseWrapper(Customize, <FallbackLoading />),
  //     },
  //     {
  //       path: "/mainentrance/logistic/logisticindex",
  //       element: SuspenseWrapper(LogisticIndex, <FallbackLoading />),
  //     },
  //     {
  //       path: "/mainentrance/incomingcontainer",
  //       element: SuspenseWrapper(IncomingContainter, <FallbackLoading />),
  //     },
  //     {
  //       path: "*",
  //       element: <p style={{ position: "absolute", left: "50%", top: "50%" }}>404 Not Found</p>,
  //     },
  //   ],
  // },
];
