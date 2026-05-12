import React, { useState, useEffect } from 'react';
import { 
  Star, 
  CheckCircle, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Droplets, 
  Leaf, 
  Dna, 
  ShoppingBag, 
  Phone, 
  MapPin, 
  Mail,
  Menu,
  X,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const COLORS = {
  hectorGold: '#d4af37',
  hectorPink: '#fff5f7',
  brandPink: '#db2777'
};

const App = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setHours(24, 0, 0, 0);
      const diff = tomorrow - now;

      setTimeLeft({
        h: Math.floor(diff / (1000 * 60 * 60)),
        m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((diff % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Giả lập gửi email tới zydang2025@gmail.com
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log("Order submitted to: zydang2025@gmail.com");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-pink-100 selection:text-pink-600 font-sans">
      
      {}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-pink-100">
        <div className="container mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">H</div>
            <span className="font-serif font-bold text-2xl tracking-tighter text-slate-900">HECTOR</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-semibold text-xs uppercase tracking-widest text-slate-500">
            <a href="#formula" className="hover:text-pink-600 transition-colors">Công thức</a>
            <a href="#benefits" className="hover:text-pink-600 transition-colors">Lợi ích</a>
            <a href="#feedback" className="hover:text-pink-600 transition-colors">Khách hàng</a>
            <a href="#order" className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-all shadow-md">Mua Ngay</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-pink-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            <a href="#formula" onClick={() => setIsMenuOpen(false)} className="font-bold py-2">CÔNG THỨC</a>
            <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="font-bold py-2">LỢI ÍCH</a>
            <a href="#feedback" onClick={() => setIsMenuOpen(false)} className="font-bold py-2">KHÁCH HÀNG</a>
            <a href="#order" onClick={() => setIsMenuOpen(false)} className="bg-pink-600 text-white p-4 rounded-xl text-center font-bold">MUA NGAY</a>
          </div>
        )}
      </nav>

      {}
      <header className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#fff5f7] to-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5 z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8 border border-pink-100">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-xs font-bold text-pink-600 uppercase tracking-widest italic">Công nghệ Collagen Peptides 5000mg</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8 text-slate-900">
              Đánh thức làn da <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600 italic">Thanh Xuân</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Sự kết hợp hoàn hảo giữa <span className="font-bold text-pink-600 underline decoration-pink-200">Đông Trùng Hạ Thảo</span> và tinh chất Collagen thủy phân, giúp trẻ hóa tầng sâu và cân bằng nội tiết tố.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a href="#order" className="group bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-pink-600 transition-all shadow-xl hover:shadow-pink-200 flex items-center gap-3">
                NHẬN ƯU ĐÃI NGAY
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
                </div>
                <span className="font-bold text-sm text-slate-500">12.5k+ Người tin dùng</span>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 mt-16 lg:mt-0 relative">
             {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-200/40 rounded-full blur-3xl -z-10"></div>
            <img 
              src="https://hectorstore.com.vn/wp-content/uploads/2024/09/hector-collagen-dong-trung-ha-thao.png" 
              alt="Hector Collagen Bottle" 
              className="w-full h-auto drop-shadow-[0_35px_35px_rgba(219,39,119,0.2)] animate-bounce-slow"
              style={{ animationDuration: '6s' }}
            />
          </div>
        </div>
      </header>

      {}
      <section className="bg-slate-900 py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center text-white animate-pulse">
              <Zap fill="currentColor" />
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold uppercase tracking-wider">Flash Sale Đặc Biệt</h2>
              <p className="text-slate-400">Giảm giá <span className="text-pink-500 font-bold">30%</span> áp dụng cho 50 khách hàng đầu tiên</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            {[
              { label: 'Giờ', value: timeLeft.h },
              { label: 'Phút', value: timeLeft.m },
              { label: 'Giây', value: timeLeft.s, highlight: true }
            ].map((unit, i) => (
              <div key={i} className="text-center">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold border transition-all ${unit.highlight ? 'bg-pink-600 border-pink-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-100'}`}>
                  {String(unit.value).padStart(2, '0')}
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-500 mt-2 block tracking-widest">{unit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="formula" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4">Thành phần đột phá</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900 italic">Tinh hoa hội tụ trong 1 chai 50ml</h3>
            <div className="w-20 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                icon: <Dna className="text-pink-500" />, 
                title: "Collagen Peptides", 
                desc: "5000mg Collagen thủy phân từ cá, hấp thụ siêu nhanh vào tế bào da.",
                color: "bg-pink-50" 
              },
              { 
                icon: <Leaf className="text-amber-600" />, 
                title: "Đông Trùng Hạ Thảo", 
                desc: "Ổn định nội tiết tố, tăng sức đề kháng và cải thiện giấc ngủ.",
                color: "bg-amber-50" 
              },
              { 
                icon: <Droplets className="text-blue-500" />, 
                title: "Hyaluronic Acid", 
                desc: "Giữ nước tầng sâu, giúp da căng mọng và mờ nếp nhăn hiệu quả.",
                color: "bg-blue-50" 
              },
              { 
                icon: <Sparkles className="text-orange-500" />, 
                title: "Vitamin C & Trái Cây", 
                desc: "Từ dứa và sơ ri tươi, hỗ trợ tổng hợp collagen tự nhiên.",
                color: "bg-orange-50" 
              }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-[40px] ${item.color} border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group`}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section id="order" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-[50px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            {/* Left Info Column */}
            <div className="lg:w-1/2 bg-slate-900 p-12 lg:p-20 text-white flex flex-col justify-between relative overflow-hidden">
               {/* Decorative Gradient */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-8 italic">Chăm sóc bản thân ngay hôm nay</h2>
                <p className="text-slate-400 mb-12 italic leading-relaxed">
                  "Đừng để thanh xuân trôi qua lãng phí. Một liệu trình Hector Collagen mỗi ngày là món quà ý nghĩa nhất cho làn da và sức khỏe của bạn."
                </p>
                <div className="space-y-6">
                  {[
                    "Miễn phí vận chuyển toàn quốc",
                    "Kiểm tra hàng trước khi thanh toán",
                    "Tư vấn 1:1 từ chuyên gia dinh dưỡng"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle className="text-pink-500 w-6 h-6" />
                      <span className="font-semibold text-lg">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-white/10 relative z-10">
                <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Hotline 24/7</p>
                <p className="text-3xl font-bold flex items-center gap-3">
                  <Phone className="text-amber-400" /> 1900 68XX
                </p>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:w-1/2 p-12 lg:p-20">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-3xl font-bold mb-8">Thông tin đặt hàng</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-2">Họ và tên</label>
                      <input 
                        type="text" required 
                        placeholder="Nguyễn Văn A"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-pink-500 transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-400 mb-2">Số điện thoại</label>
                      <input 
                        type="tel" required 
                        placeholder="09xx xxx xxx"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-pink-500 transition-all font-medium"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-400 mb-2">Địa chỉ nhận hàng</label>
                    <input 
                      type="text" required 
                      placeholder="Số nhà, tên đường, phường/xã..."
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-pink-500 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-400 mb-2">Chọn gói liệu trình</label>
                    <select 
                      defaultValue="3"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-pink-500 transition-all font-bold appearance-none"
                    >
                      <option value="1">Dùng thử: 1 Hộp (10 chai) - 580.000đ</option>
                      <option value="3">Tiết kiệm: 3 Hộp (1 tháng) - 1.560.000đ</option>
                      <option value="6">Vẻ đẹp hoàn hảo: 6 Hộp (2 tháng) - 2.800.000đ</option>
                    </select>
                  </div>
                  <button 
                    disabled={isLoading}
                    className="w-full bg-slate-900 text-white py-6 rounded-2xl font-bold text-xl uppercase tracking-widest shadow-xl hover:bg-pink-600 transition-all flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>XÁC NHẬN ĐẶT HÀNG <ShoppingBag /></>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    Đơn hàng sẽ được xác nhận qua điện thoại và gửi thông báo tới <br />
                    <span className="font-bold text-slate-600">zydang2025@gmail.com</span>
                  </p>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-green-200">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-4xl font-serif font-bold mb-4">Cảm ơn bạn!</h3>
                  <p className="text-slate-600 mb-8 text-lg">Đơn hàng của bạn đã được ghi nhận. <br /> Chuyên viên Hector sẽ gọi điện lại sau vài phút.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-pink-600 font-bold hover:underline italic">Tiếp tục mua sắm</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">H</div>
              <span className="font-serif font-bold text-xl tracking-tighter">HECTOR</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Sản phẩm chất lượng cao từ Lavite. Tự hào thương hiệu Việt Nam với quy trình sản xuất đạt chuẩn FDA Hoa Kỳ và ISO quốc tế.
            </p>
            <div className="flex gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:bg-pink-50 transition-all cursor-pointer">
                  <Sparkles size={18} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-8">Hỗ trợ khách hàng</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-pink-600 transition">Hướng dẫn mua hàng</a></li>
              <li><a href="#" className="hover:text-pink-600 transition">Chính sách vận chuyển</a></li>
              <li><a href="#" className="hover:text-pink-600 transition">Đổi trả & Hoàn tiền</a></li>
              <li><a href="#" className="hover:text-pink-600 transition">Hệ thống phân phối</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm uppercase tracking-widest mb-8">Liên hệ</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center gap-3"><Mail size={16} /> zydang2025@gmail.com</li>
              <li className="flex items-center gap-3"><Phone size={16} /> 1900 68XX</li>
              <li className="flex items-center gap-3"><MapPin size={16} /> TP. Hồ Chí Minh, Việt Nam</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-50 pt-10 text-center">
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            Copyright © 2024 HECTOR COLLAGEN. Thiết kế bởi Gemini.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

// CSS needed in a real project (Tailwind handles most):
// @keyframes bounce-slow {
//   0%, 100% { transform: translateY(-5%); }
//   50% { transform: translateY(0); }
// }
// .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
