import React,{useState} from 'react';
import Carousel from "./components/Carousel/Carousel"

const Lightbox = (props) => {
 

const images = props.viewImage.map((itemall) => (itemall.image));
 
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  
  //looping through our images array to create img elements
  const imageCards = props.viewImage.map((listall) => (
    <img onClick={() => showImage(listall.image)} src={listall.image} />
  ));
  
  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };
  
  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };
  
  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      let loopsimg = props.viewImage.length - 1;
      let nextImage = images[currentIndex - loopsimg ];
      setImageToShow(nextImage);
      //setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };
  
  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      let loopsimg = props.viewImage.length - 1;
      let nextImage = images[currentIndex + loopsimg ];
      setImageToShow(nextImage);
     // setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  


  return (
    <>
    {props.viewImage.map((item, index) => (
      <div className="col-md-3 " key={item.id} >
        <img className="image-card" onClick={() => showImage(item.image)} src={item.image} />
      </div>
    ))}  
         
      {lightboxDisplay ? <>

        <div id="lightbox" >
          <div className="container">
            <div className="row">
              <div className="col-md-12" >
                <div className="lightbox__view" >
                  <p className="lightbox__close" onClick={hideLightBox}> X Close </p>
                  <button onClick={showPrev} className="arrow__left">⭠</button>
                    <img id="lightbox-img" src={imageToShow}></img> 
                  <button onClick={showNext} className="arrow__right">⭢</button>
                </div>
                <div className="clearfix"></div>
                <Carousel show={6} >
                    {props.viewImage.map((item, index) => (
                      <div  key={item.id}>
                        <div style={{padding: 17}} >
                          <img className="image-card-carousel" onClick={() => showImage(item.image)} src={item.image} />
                        </div>
                      </div>
                    ))}  
                    </Carousel> 
              </div>
            </div>
          </div>
        </div>
       </> : null }
</>

  )
}

export default Lightbox
