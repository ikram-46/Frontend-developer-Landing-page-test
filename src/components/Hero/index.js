
import ContainerUI from "../ContainerUI";
import "./hero.scss";


const HeroHome = ({ ...props }) => {

  return (
    <div className="HeroBase HeroHome">
      <div className="HeroHome__content">
        <ContainerUI>
          <div className="HeroHome__content__inner">
            <div className="__slogan">
              <h1>
                 خدماتنا لك اقرب .. 
              </h1>
              <p> 
                في المرة القادمة التي يتحدث فيها شخص ما عن " هذا ما تفعله الشركة X "،
                 اغتنم هذه الفرصة
                 للرجوع إلى الوراء وإجراء نقاش أوسع حول عملية التصميم وأهمية الحصول على تجربة
                  مخصصة للمستخدمين. قليلة    
              </p>
            </div>
            <div className="__actions">
              <div className="__upload">
              <p>تنزيل التطبيق</p>
              <img src="/assets/qrCode.svg"/>
              </div>
              <div className="__btns">
                <img src="/assets/appStore.svg"/>
                <img src="/assets/playStore.svg"/>
              </div>
            </div>
          </div>
        </ContainerUI>
      </div>
      
    </div>
  );
};

export default HeroHome;
