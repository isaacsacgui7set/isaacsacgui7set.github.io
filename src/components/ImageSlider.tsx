import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageSlider.css';

interface ImageSliderProps {
  images: string[];
  title: string;
}

export const ImageSlider = ({ images, title }: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="img-slider-container">
      <button className="img-slider-btn left" onClick={prevSlide}><ChevronLeft size={24} /></button>
      <button className="img-slider-btn right" onClick={nextSlide}><ChevronRight size={24} /></button>

      <div className="img-slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="img-slide" aria-hidden={current !== index}>
            <img src={img} alt={`${title} ${index + 1}`} className="img-slide-image" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
        ))}
      </div>
      
      <div className="img-slider-dots">
        {images.map((_, i) => (
          <button 
            key={i} 
            className={`img-dot ${current === i ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};
