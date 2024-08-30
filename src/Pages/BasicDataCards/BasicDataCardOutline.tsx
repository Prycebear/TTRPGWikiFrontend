// import {Row} from "reactstrap";
// import useFetch from "../../Functions/UseFetchGet.ts";
// import BasicDataInline from "./BasicDataCardInline.tsx";

// interface Species {
//     speciesId: number;
//     speciesName: string;
//     speciesShortDescription: string;
//
// }
//
// export default function BasicDataCardOutline() {
//
//     const URL = 'http://localhost:8080/species/all/card';
//     const [speciesCardUrls] = useFetch(URL);
//     const sortedArray: Species[] = speciesCardUrls.filter((speciesCardUrl: Species) => !speciesCardUrl.speciesName.includes('6'));
//
//
//     return (
//
//         <div>
//             <Row className="justify-content-md-center"  xxl={2} lg={3} md={4} sm={6} xs={12}>
//                 {sortedArray && sortedArray.map(item => {
//                         return (
//                             <BasicDataInline id={item.speciesId} name={item.speciesName}
//                                              shortDescription={item.speciesShortDescription}/>
//                         )
//                     }
//                 )}
//             </Row>
//         </div>
//     )
// }





