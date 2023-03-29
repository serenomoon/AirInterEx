import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactSimplyCarousel from 'react-simply-carousel';

export const Carrousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  console.log(activeSlideIndex)
  

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: activeSlideIndex != 2 ?{
            position: 'absolute',
            right: '100px',
            alignSelf: 'center',
            background: 'rgba(0, 0, 0, 0.83)',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '30px',
            height: 60,
            lineHeight: 1,
            textAlign: 'center',
            width: 60,
          }: {
            position: 'absolute',
            background: 'transparent',
            right: '100px',
            alignSelf: 'center',
            border: 'none',
            borderRadius: '50%',
            height: 60,
            lineHeight: 1,
            width: 60,
          },
          children: activeSlideIndex != 2 ? <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span> : <></>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: activeSlideIndex != 0 ?{
            position: 'absolute',
            left: '100px',
            zIndex: '1',
            alignSelf: 'center',
            background: 'rgba(0, 0, 0, 0.83)',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '30px',
            height: 60,
            lineHeight: 1,
            textAlign: 'center',
            width: 60,
          }: {
            position: 'absolute',
            background: 'transparent',
            right: '100px',
            alignSelf: 'center',
            border: 'none',
            borderRadius: '50%',
            height: 60,
            lineHeight: 1,
            width: 60,
          },
          children: activeSlideIndex != 0 ? <span><i class="fa fa-arrow-left" aria-hidden="true"></i></span> : <></>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <Link>
          <div className='placeinfo-carrousel'>
              <img src='https://www.suteba.org.ar/files/84538_6877.jpg'/>
              <div className='placeinfo-carrousel-first'>
                  Lago Puelo
              </div>
          </div>
        </Link>
        <Link>
          <div className='placeinfo-carrousel placeinfo-carrousel-second'>
              <img src='https://tripin.travel/wp-content/uploads/2012/12/lago-puelo-turismo-8-playita.jpg'/>
              <div>
                  <h4>Top 10</h4>
                  <hr></hr>
                  <p>Lago Puelo</p>
              </div>
          </div>
        </Link>
        <Link>
          <div className='placeinfo-carrousel placeinfo-carrousel-third'>
            <img src='https://www.patagoniaexpress.com/images/lago_puelo/lago_puelo__vista.jpg'/>
            <div>
                <h4>Food & Wine</h4>
                <hr></hr>
                Lago Puelo
            </div>
          </div>
        </Link>
        <Link>
          <div className='placeinfo-carrousel placeinfo-carrousel-fourth'>
            <img src='https://diariolaportada.com.ar/wp-content/uploads/2021/01/1522549962545.jpg'/>
            <div>
                <h4>History, arts & culture</h4>
                <hr></hr>
                Lago Puelo
            </div>
          </div>
        </Link>
        <Link>
          <div className='placeinfo-carrousel placeinfo-carrousel-fifth'>
            <img src='https://noticiasmercedinas.com/site/wp-content/uploads/2021/11/lagopuelo.jpg'/>
            <div>
                <h4>Lakes</h4>
                <hr></hr>
                Lago Puelo
            </div>
          </div>
        </Link>
      </ReactSimplyCarousel>
    </div>
  );
}
