import React, { Fragment } from 'react';
import { getCardData } from '../../lib/API';
import { Card } from '../../Pages/Card';
import { About } from '../../Pages/About';
import { useGetAboutInfoQuery } from '../../store/slicers/apiSlice';

// export const SystemLayout = () => {
//   const { data: aboutInfo } = useGetAboutInfoQuery();
//
//   return (
//     < >
// <About info={aboutInfo}/>
//     </>
//   )
// };
