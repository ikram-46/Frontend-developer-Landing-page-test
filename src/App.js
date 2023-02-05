import logo from './logo.svg';
import './App.scss';
import Layout from './layout';
import HeroHome from './components/Hero';
import ContainerUI from './components/ContainerUI';
import { Grid, Link } from '@mui/material';

const PERMIS = [
  {id:0, icon:"/assets/permis1.svg", value:"إنشاء رخصة بناء"},
  {id:1, icon:"/assets/permis2.svg", value:"رخصة تسوير"},
  {id:2, icon:"/assets/permis3.svg", value:"اصدار رخصة بناء بالتزامن"},
  {id:3, icon:"/assets/permis4.svg", value:"رخصة هدم مع وجود رخصة"},
]

const SERVICES = [
  {id:0, icon:"/assets/serviceIcon1.svg", value:" شهادة صحية"},
  {id:1, icon:"/assets/serviceIcon2.svg", value:" السيارت التالفة والمحجوزة"},
  {id:2, icon:"/assets/serviceIcon3.svg", value:"الافراج عن سيارة محجوزة"},
  {id:3, icon:"/assets/serviceIcon4.svg", value:" رخص الانشطة التجارية"},
]

const PARTNERS = [
  {id:0, url:"/assets/partner1.svg"},
  {id:1, url:"/assets/partner2.svg"},
  {id:2, url:"/assets/partner3.svg"},
]

function App() {
  return (
    <Layout>
      <HeroHome/>
      <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
        <div className="__services">
          <img src="/assets/mobile.svg"/>
        </div>
      </div>
    
      <div className="PageContent HomeContent">
        <ContainerUI>
          <div className="HomeContent__inner">
          <div className="PageContent__section" id="section-1">
            <div className="__section__content">
              <h2>
                أكثر من 24 خدمة
                <br/>
                <span>بين يديك !</span>
                </h2>
              <p>
                في المرة القادمة التي يتحدث فيها شخص ما عن " هذا ما تفعله الشركة X "،
                 اغتنم هذه الفرصة
                 للرجوع إلى الوراء وإجراء نقاش أوسع حول عملية التصميم وأهمية الحصول على تجربة
                  مخصصة للمستخدمين. قليلة 
              </p>
            </div>
            <div className="__section__preview">
              <img src="/assets/service1.svg"/>
            </div>
          </div>

          <div className="PageContent__section" id="section-2">
            <div className="__section__content">
              <h2>الرخص الإنشائية</h2>
              <p>
                 يوفر تطبيق مدينتي جميع خدمات التعاقد مع المكاتب الهندسية ويمكنك التقدم بالطلب ومتابعته عبر تطبيق
                  مدينتي myCity
            
              </p>
              <div className="__permis">
              {PERMIS.map((p, idx)=>(
                <div className="__item">
                  <img src={p.icon} />
                  <p>{p.value}</p>
                </div>
                ))}
                

              </div>
            </div>
            <div className="__section__preview">
              <img src="/assets/service2.PNG"/>

            </div>
          </div>

          <div className="PageContent__section" id="section-3">
          <div className="__section__preview">
              <img src="/assets/service3.PNG"/>

            </div>
            <div className="__section__content">
              <h2>الخدمات الاستعلامية</h2>
              <p>
              لا داعي للعناء للاستعلام عن معاملتك بعد اليوم ! تطبيق مدينتي يوفر الكثير من الخدمات الاستعلامية التي ستساعدك للتتبع سير معاملاتك !
              </p>
              <div className="__permis">
                <Grid container spacing={5}>
                  {SERVICES.map((p, idx)=>(
                   <Grid item xs={12} md={6} key={idx}>
                      <div className="__item">
                        <img src={p.icon} />
                        <p>{p.value}</p>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </div>

          <div className="PageContent__section" id="section-4">
            <div className="__section__content">
              <h2>خدمات المدينة</h2>
              <p>
              يوفر تطبيق مدينتي خدمات البحث عن الحدائق والوصول لها عبر الخرائط ! ليس فقط كذلك بل يمكنك البحث حسب المعايير التي تناسب احتياجاتك اليومية واحتياجات عائلتك !
              </p>
              <div className="__cityImg">
                <img src="/assets/service5.PNG" />
              </div>
            </div>
            <div className="__section__preview">
              <img src="/assets/service4.PNG"/>

            </div>
          </div>

          <div className="PageContent__section" id="section-5">
            <div className="__section__content">
              <h2>شركاء مدينتي MyCity</h2>
            </div>
            <div className="__section__preview">
                {PARTNERS.map((p, idx)=>(
                  <div className="__item" key={idx}>
                    <img src={p.url} />
                  </div>
                ))}
            </div>
          </div>

          <div className="PageContent__section" id="section-6">
            <div className="__section__content">
              <img src="/assets/bg2.PNG"/>
              <div className="__details">
                 <h2> دليل تطبيق مدينتي</h2>
                 <p>
                  يوفر الدليل الشرح الكامل للتطبيق والذي وهو يحوي جميع الخطوات
                    المصورة خطوة بخطوة ، نحن نضمن لك رحلة تعليمية سهله وسلسة
                  </p>
                  <div className="__actions">
                    <Link>
                      تنزيل الدليل الآن
                    </Link>
                    <Link href="#" className="__download">
                       حمل التطبيق
                    </Link>
                  </div>
              </div>
              
            </div>
          </div>

          <div className="PageContent__section" id="section-7">
            <div className="__section__content">
              <h2>لتجربة مستخدم أفضل</h2>
              <p>
              إن كانت لديكم أي ملاحظات أو أراء تساعد في تحسين التطبيق يتواصل عبر حساب  حول تجربة المستخدم  يتواصل عبر حساب 
              </p>
              <a href = "mailto:ux@alriyadh.gov.sa?subject = Feedback&body = Message">
                 <img src="/assets/email.svg"/>Sux@alriyadh.gov.sa
              </a>

            </div>
            <div className="__section__preview">
              <img src="/assets/service6.svg"/>

            </div>
          </div>


          </div>
        </ContainerUI>
      </div>
    </Layout>
  );
}

export default App;
