import React from "react";
import './index.scss'
import { Link } from "react-router-dom";
import '../../Asset/LOGO.png'

export default function Home() {
    return(
        <div className="home">
            <div>
                <div>
                    <h2>Explore</h2>
                    <Link>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_864_1382)">
                                <path d="M5.33731 8.05C5.33731 9.3625 4.2873 10.4125 2.9748 10.4125C1.6623 10.4125 0.612305 9.3625 0.612305 8.05C0.612305 6.7375 1.6623 5.6875 2.9748 5.6875C4.2873 5.6875 5.33731 6.7375 5.33731 8.05ZM4.50606 1.8375C4.50606 2.5375 3.98105 3.0625 3.3248 3.0625C2.66855 3.0625 2.0998 2.5375 2.0998 1.8375C2.0998 1.1375 2.6248 0.65625 3.28105 0.65625C3.98105 0.65625 4.50606 1.18125 4.50606 1.8375ZM7.48106 5.11875C7.08731 4.8125 6.82481 4.33125 6.82481 3.7625C6.82481 2.84375 7.56856 2.05625 8.53106 2.05625C9.36231 2.05625 10.0186 2.625 10.1936 3.4125" fill="#64D3FF"/>
                                <path d="M8.83727 15.1809C9.01227 15.3559 8.96852 15.6184 8.70602 15.8809C8.44352 16.1434 8.04977 16.3184 7.61227 16.3184L7.78727 16.7996C8.22477 16.7996 8.74977 16.5809 9.09977 16.2309C9.62477 15.7059 9.71227 15.0934 9.31852 14.6996C8.48727 13.8684 7.52477 15.3996 6.99977 14.8746C6.82477 14.6996 6.91227 14.4809 7.13102 14.2621C7.30602 14.0871 7.61227 13.9121 8.00602 13.7809L7.83102 13.2996C7.48102 13.3871 7.08727 13.5621 6.78102 13.8684C6.29977 14.3496 6.16852 14.9621 6.56227 15.3559C7.34977 16.1871 8.31227 14.6559 8.83727 15.1809ZM11.3748 13.9121C12.0748 13.2121 12.0748 12.2059 11.4185 11.5496C10.7623 10.8934 9.71227 10.9371 9.05602 11.5934C8.39977 12.2496 8.35602 13.2996 9.01227 13.9559C9.66852 14.6121 10.6748 14.6121 11.3748 13.9121ZM9.40602 11.9434C9.84352 11.5059 10.5873 11.4621 11.0248 11.9434C11.4623 12.3809 11.4623 13.1246 11.0248 13.5621C10.5873 13.9996 9.84352 14.0434 9.36227 13.5621C8.92477 13.1246 8.96852 12.3809 9.40602 11.9434ZM13.0373 12.2059L12.731 11.4621L13.8685 10.3246L14.6123 10.6309L15.006 10.2371L11.7248 8.92461L11.3748 9.31836L12.6435 12.6434L13.0373 12.2059ZM11.9435 9.53711L13.3873 10.1059L12.5123 10.9809L11.9435 9.53711ZM15.7498 9.49336L15.0498 8.79336L15.5748 8.26836C16.1435 7.69961 16.1873 7.04336 15.6623 6.51836C15.181 6.03711 14.5248 6.08086 13.956 6.64961L13.0373 7.56836L15.356 9.88711L15.7498 9.49336ZM13.781 7.56836L14.306 7.04336C14.656 6.69336 15.006 6.64961 15.3123 6.95586C15.6185 7.26211 15.5748 7.61211 15.2248 7.96211L14.6998 8.48711L13.781 7.56836Z" fill="#FFBF5B"/>
                                <path d="M2.93123 10.7191C1.74998 13.8691 2.18748 16.9754 4.11248 18.8566C5.29373 20.0379 6.95623 20.6941 8.83748 20.6941C9.27498 20.6941 9.75623 20.6504 10.1937 20.6066C12.6 20.2566 15.0062 18.9441 16.975 17.0191C18.9437 15.0504 20.2125 12.6441 20.5625 10.2379C20.9562 7.78789 20.3437 5.64414 18.8562 4.15664C16.8437 2.10039 13.5625 1.79414 10.4125 3.06289C10.1062 2.27539 9.36248 1.75039 8.53123 1.75039C7.39373 1.75039 6.51873 2.66914 6.51873 3.76289C6.51873 4.28789 6.69373 4.72539 7.04373 5.11914C6.69373 5.38164 6.34373 5.68789 6.03748 6.03789C5.81873 6.25664 5.59998 6.51914 5.38123 6.78164C4.94373 5.95039 4.06873 5.42539 3.06248 5.42539C1.57498 5.42539 0.393728 6.60664 0.393728 8.09414C0.306228 9.49414 1.48748 10.6754 2.93123 10.7191ZM7.13123 3.76289C7.13123 3.01914 7.74373 2.40664 8.48748 2.40664C9.09998 2.40664 9.58123 2.80039 9.79998 3.32539C9.01248 3.67539 8.22498 4.15664 7.52498 4.68164C7.30623 4.41914 7.13123 4.11289 7.13123 3.76289ZM6.47498 6.47539C10.2812 2.66914 15.6187 1.79414 18.375 4.59414C19.6875 5.90664 20.2562 7.87539 19.9062 10.1066C19.5562 12.3816 18.3312 14.6566 16.4937 16.4941C14.6562 18.3316 12.3812 19.5566 10.1062 19.9066C7.87498 20.2566 5.90623 19.6879 4.59373 18.3754C2.79998 16.6254 2.44998 13.6504 3.67498 10.6316C4.81248 10.3254 5.68748 9.27539 5.68748 8.05039C5.68748 7.83164 5.64373 7.61289 5.59998 7.43789C5.86248 7.08789 6.16873 6.78164 6.47498 6.47539ZM3.01873 6.03789C4.11248 6.03789 5.03123 6.95664 5.03123 8.05039C5.03123 9.14414 4.11248 10.0629 3.01873 10.0629C1.92498 10.0629 1.00623 9.14414 1.00623 8.05039C1.00623 6.95664 1.88123 6.03789 3.01873 6.03789ZM1.79373 1.83789C1.79373 2.66914 2.49373 3.36914 3.32498 3.36914C4.15623 3.36914 4.85623 2.66914 4.85623 1.83789C4.85623 1.00664 4.15623 0.306641 3.32498 0.306641C2.49373 0.306641 1.79373 1.00664 1.79373 1.83789ZM4.19998 1.83789C4.19998 2.31914 3.80623 2.71289 3.32498 2.71289C2.84373 2.71289 2.44998 2.31914 2.44998 1.83789C2.44998 1.35664 2.84373 0.962891 3.32498 0.962891C3.80623 0.962891 4.19998 1.35664 4.19998 1.83789Z" fill="#030303"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_864_1382">
                                    <rect width="21" height="21" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Bath & Body</span>
                    </Link>
                    <Link>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3876 0.533203H5.61271C5.56678 0.534731 5.52163 0.545574 5.48002 0.565072C5.43841 0.58457 5.40119 0.612319 5.37062 0.646634C5.34005 0.680949 5.31677 0.721116 5.30219 0.764698C5.28762 0.80828 5.28204 0.854369 5.28581 0.90017L6.27642 12.2263C6.34589 13.0192 6.51617 13.8001 6.78317 14.5499L7.70249 17.0256C7.70311 17.0272 7.71107 17.0291 7.71107 17.0307V20.1252C7.71107 20.3064 7.84515 20.467 8.02639 20.467H12.9664C13.1476 20.467 13.2892 20.3064 13.2892 20.1252V17.0467C13.2892 17.0397 13.2988 17.0331 13.3015 17.0258L14.217 14.5472C14.4836 13.7988 14.6536 13.0194 14.7231 12.228L15.7141 0.903574C15.7181 0.857205 15.7127 0.810504 15.6981 0.766305C15.6835 0.722105 15.6601 0.681328 15.6293 0.646447C15.5989 0.611987 15.5618 0.584149 15.5202 0.564666C15.4786 0.545183 15.4335 0.534473 15.3876 0.533203ZM15.0295 1.18945L14.8419 3.36328H6.15838L5.97077 1.18945H15.0295ZM9.6388 19.8105V19.1543H11.3615V19.8105H9.6388ZM12.0177 19.8105V18.8123C12.0168 18.7696 12.0073 18.7276 11.99 18.6886C11.9726 18.6496 11.9477 18.6144 11.9166 18.5852C11.8855 18.5559 11.8489 18.5332 11.809 18.5182C11.769 18.5033 11.7264 18.4964 11.6838 18.498H9.31646C9.27381 18.4964 9.23127 18.5033 9.1913 18.5182C9.15133 18.5332 9.11474 18.5559 9.08366 18.5852C9.05258 18.6144 9.02764 18.6496 9.01028 18.6886C8.99292 18.7276 8.98349 18.7696 8.98255 18.8123V19.8105H8.36732V17.2266H12.6329V19.8105H12.0177ZM14.0701 12.1786C14.0058 12.9097 13.8483 13.6295 13.6014 14.3206L12.7676 16.5703H8.23262L7.4 14.3203C7.15245 13.6282 6.99451 12.9073 6.93005 12.1752L6.21576 4.01953H14.7845L14.0701 12.1786Z" fill="#64D3FF"/>
                            <path d="M12.3457 5.70117C12.3457 5.61415 12.3111 5.53069 12.2496 5.46915C12.1881 5.40762 12.1046 5.37305 12.0176 5.37305H8.73633C8.6493 5.37305 8.56584 5.40762 8.50431 5.46915C8.44277 5.53069 8.4082 5.61415 8.4082 5.70117V14.1914C8.4082 14.2784 8.44277 14.3619 8.50431 14.4234C8.56584 14.485 8.6493 14.5195 8.73633 14.5195H12.0176C12.1046 14.5195 12.1881 14.485 12.2496 14.4234C12.3111 14.3619 12.3457 14.2784 12.3457 14.1914V5.70117ZM11.6895 13.8633H9.06445V6.0293H11.6895V13.8633Z" fill="#03AC13"/>
                        </svg>
                        <span>Skin Care</span>
                    </Link>
                    <Link>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_864_1388)">
                                <path d="M3.64197 16.4985C3.50744 16.4985 3.38932 16.4197 3.34994 16.2819L3.3401 16.2524C3.29088 16.0851 3.38603 15.9079 3.55666 15.8587C3.72728 15.8094 3.90119 15.9046 3.95041 16.0752C3.99963 16.2426 3.90775 16.4362 3.74041 16.4854C3.7076 16.4919 3.67478 16.4985 3.64197 16.4985Z" fill="#34495C"/>
                                <path d="M9.72891 8.08488C9.55172 8.08488 9.41063 7.94379 9.41063 7.7666V5.76832C9.40406 5.76832 9.3975 5.76832 9.39094 5.76832H7.94063C7.93406 5.76832 7.9275 5.76832 7.92094 5.76832V7.7666C7.92094 7.94379 7.77984 8.08488 7.60266 8.08488C7.42547 8.08488 7.28438 7.94379 7.28438 7.7666V5.69285C7.28438 5.37785 7.57313 5.12848 7.94063 5.12848H9.39094C9.75844 5.12848 10.0472 5.37785 10.0472 5.69285V7.7666C10.0472 7.94379 9.90281 8.08488 9.72891 8.08488ZM18.3159 9.46957C18.2667 9.46957 18.2142 9.46629 18.165 9.45973C17.7844 9.40723 17.4792 9.19723 17.2856 8.85269C17.0888 8.49832 16.7639 8.2227 16.3767 8.07832C15.8419 7.87488 15.1659 7.73707 14.3686 7.66816C14.1947 7.65176 14.0634 7.49754 14.0798 7.32363C14.0962 7.14973 14.2472 7.01848 14.4244 7.03488C15.2775 7.11035 16.0125 7.26129 16.6031 7.48441C17.1314 7.68457 17.5711 8.05863 17.8402 8.54426C17.9353 8.71488 18.0698 8.80676 18.2503 8.83301C18.3783 8.84941 18.503 8.81332 18.6014 8.72801C18.7097 8.63285 18.772 8.49176 18.772 8.33754V7.63535C18.772 7.53363 18.8213 7.43848 18.9033 7.37941C18.9853 7.32035 19.0903 7.30395 19.1887 7.33348C19.2806 7.36301 19.3758 7.37941 19.4709 7.37941C19.9631 7.37941 20.3634 6.9791 20.3634 6.48691C20.3634 5.99473 19.9631 5.59441 19.4709 5.59441C19.3758 5.59441 19.2806 5.61082 19.1887 5.64035C19.0936 5.67316 18.9853 5.65676 18.9033 5.59441C18.8213 5.53535 18.772 5.4402 18.772 5.3352V4.64285C18.772 4.50504 18.7195 4.38035 18.6244 4.2852C18.5292 4.18676 18.398 4.13426 18.2602 4.13426C18.1847 4.13426 18.0009 4.26551 17.7942 4.63301C17.6794 4.83973 17.5186 5.01363 17.3316 5.13832C16.8886 5.43035 16.0223 5.80769 14.4244 5.94879C14.2472 5.96191 14.0962 5.83395 14.0798 5.66004C14.0634 5.48613 14.1947 5.33191 14.3686 5.31551C15.9141 5.18098 16.6687 4.81348 16.9837 4.60676C17.0887 4.53785 17.1773 4.43941 17.243 4.32457C17.453 3.94723 17.8008 3.50098 18.2634 3.50098C18.5686 3.50098 18.8639 3.62566 19.0772 3.83895C19.2905 4.04895 19.4119 4.3377 19.4119 4.64613V4.95785C20.2748 4.92176 21 5.61738 21 6.48035C21 7.34332 20.2716 8.03895 19.4119 8.00613V8.33098C19.4119 8.66895 19.2708 8.98395 19.0247 9.20051C18.8212 9.3777 18.5752 9.46957 18.3159 9.46957ZM2.05406 8.66238C1.68 8.66238 1.30594 8.55738 0.974531 8.35394C0.364219 7.9766 0 7.32363 0 6.60832C0 5.89301 0.364219 5.23676 0.974531 4.85941C1.58484 4.48207 2.32969 4.44926 2.97281 4.77082L6.07688 6.32285C6.18516 6.37535 6.25406 6.48691 6.25406 6.60832C6.25406 6.72973 6.18516 6.83801 6.07688 6.89379L2.97281 8.44582C2.68078 8.5902 2.36578 8.66238 2.05406 8.66238ZM2.05406 5.18754C1.79484 5.18754 1.53891 5.25973 1.30922 5.40082C0.889219 5.66004 0.636563 6.11285 0.636563 6.60832C0.636563 7.10379 0.889219 7.55332 1.30922 7.81582C1.72922 8.07504 2.24766 8.09801 2.68734 7.87816L5.22375 6.6116L2.68734 5.34504C2.48719 5.23676 2.27063 5.18754 2.05406 5.18754Z" fill="#F6B64E"/>
                                <path d="M13.0264 6.9266H9.72873C9.55154 6.9266 9.41045 6.78551 9.41045 6.60832C9.41045 6.43113 9.55154 6.29004 9.72873 6.29004H13.0264C13.2036 6.29004 13.3447 6.43113 13.3447 6.60832C13.3447 6.78551 13.2036 6.9266 13.0264 6.9266ZM7.60248 6.9266H5.93889C5.7617 6.9266 5.62061 6.78551 5.62061 6.60832C5.62061 6.43113 5.7617 6.29004 5.93889 6.29004H7.60248C7.77967 6.29004 7.92076 6.43113 7.92076 6.60832C7.92076 6.78551 7.77639 6.9266 7.60248 6.9266Z" fill="#F6B64E"/>
                                <path d="M17.23 14.9097C17.0528 14.9097 16.9117 14.7686 16.9117 14.5914V13.9122C16.9117 13.735 17.0528 13.5939 17.23 13.5939C17.4071 13.5939 17.5482 13.735 17.5482 13.9122V14.5914C17.5482 14.7686 17.4039 14.9097 17.23 14.9097ZM17.23 17.1049C17.0528 17.1049 16.9117 16.9638 16.9117 16.7866V16.2222C16.9117 16.045 17.0528 15.9039 17.23 15.9039C17.4071 15.9039 17.5482 16.045 17.5482 16.2222V16.7866C17.5482 16.9605 17.4039 17.1049 17.23 17.1049ZM16.4195 15.6677H15.7403C15.5631 15.6677 15.422 15.5266 15.422 15.3494C15.422 15.1722 15.5631 15.0311 15.7403 15.0311H16.4195C16.5967 15.0311 16.7378 15.1722 16.7378 15.3494C16.7378 15.5266 16.5934 15.6677 16.4195 15.6677ZM18.6146 15.6677H18.0503C17.8731 15.6677 17.732 15.5266 17.732 15.3494C17.732 15.1722 17.8731 15.0311 18.0503 15.0311H18.6146C18.7918 15.0311 18.9329 15.1722 18.9329 15.3494C18.9329 15.5266 18.7886 15.6677 18.6146 15.6677ZM11.0382 2.21457C10.8611 2.21457 10.72 2.07348 10.72 1.89629V1.21379C10.72 1.0366 10.8611 0.895508 11.0382 0.895508C11.2154 0.895508 11.3565 1.0366 11.3565 1.21379V1.89301C11.3565 2.0702 11.2154 2.21457 11.0382 2.21457ZM11.0382 4.40645C10.8611 4.40645 10.72 4.26535 10.72 4.08816V3.52379C10.72 3.3466 10.8611 3.20551 11.0382 3.20551C11.2154 3.20551 11.3565 3.3466 11.3565 3.52379V4.08816C11.3565 4.26535 11.2154 4.40645 11.0382 4.40645ZM10.2278 2.96926H9.54855C9.37137 2.96926 9.23027 2.82816 9.23027 2.65098C9.23027 2.47379 9.37137 2.3327 9.54855 2.3327H10.2278C10.405 2.3327 10.5461 2.47379 10.5461 2.65098C10.5461 2.82816 10.405 2.96926 10.2278 2.96926ZM12.4229 2.96926H11.8586C11.6814 2.96926 11.5403 2.82816 11.5403 2.65098C11.5403 2.47379 11.6814 2.3327 11.8586 2.3327H12.4229C12.6001 2.3327 12.7412 2.47379 12.7412 2.65098C12.7412 2.82816 12.6001 2.96926 12.4229 2.96926ZM8.6659 20.1039C8.60684 20.1039 8.54449 20.1039 8.48543 20.1007C6.15246 20.0318 4.08199 18.4896 3.34699 16.2616C3.15996 15.6939 3.06152 15.1 3.06152 14.493C3.06152 13.7744 3.19605 13.0755 3.45855 12.416C3.97371 11.1199 4.94824 10.0699 6.20496 9.45629C6.36246 9.37754 6.55277 9.44316 6.63152 9.60395C6.70699 9.76145 6.64465 9.95176 6.48387 10.0305C5.37152 10.5752 4.50855 11.5071 4.04918 12.6522C3.81621 13.2363 3.6948 13.8564 3.6948 14.493C3.6948 15.0311 3.78012 15.5594 3.94746 16.0614C4.60043 18.0368 6.43465 19.4018 8.51168 19.4641C8.57074 19.4674 8.61668 19.4674 8.66262 19.4674C8.70855 19.4674 8.75777 19.4674 8.80371 19.4641C10.8873 19.4018 12.7215 18.04 13.3778 16.0746C13.3811 16.068 13.3811 16.0582 13.3843 16.0516C13.5484 15.5496 13.6337 15.0246 13.6337 14.493C13.6337 13.8564 13.5156 13.2363 13.2793 12.6522C12.8232 11.5038 11.957 10.5719 10.8414 10.0239C10.6839 9.9452 10.6182 9.75488 10.697 9.59738C10.7757 9.43988 10.9661 9.37426 11.1236 9.45301C12.3803 10.0699 13.3581 11.1199 13.8732 12.416C14.139 13.0755 14.2703 13.7744 14.2703 14.493C14.2703 15.0836 14.1784 15.6677 13.9946 16.2288C13.9914 16.2386 13.9914 16.2452 13.9881 16.255C13.2465 18.4863 11.1761 20.0285 8.83324 20.0974C8.7873 20.1039 8.72496 20.1039 8.6659 20.1039Z" fill="#34495C"/>
                                <path d="M8.66602 20.1042C8.60695 20.1042 8.54461 20.1042 8.48555 20.1009C6.81867 19.9959 5.35195 18.4406 4.84336 16.2291C4.71211 15.668 4.64648 15.0872 4.64648 14.4966C4.64648 13.7878 4.73836 13.0988 4.92211 12.4491C5.27977 11.1661 5.96555 10.1128 6.85148 9.4861C6.99586 9.38438 7.19273 9.42047 7.29445 9.56157C7.39617 9.70594 7.36008 9.90282 7.21898 10.0045C6.45117 10.5459 5.8507 11.4745 5.5357 12.6197C5.36836 13.2136 5.28305 13.8436 5.28305 14.4933C5.28305 15.0347 5.34211 15.5695 5.46352 16.0814C5.90977 18.0173 7.14023 19.3758 8.52492 19.4611C8.57414 19.4644 8.62008 19.4644 8.66602 19.4644C8.71195 19.4644 8.76117 19.4644 8.80711 19.4611C10.1918 19.3758 11.4223 18.0173 11.8685 16.0814C11.9866 15.5663 12.049 15.0314 12.049 14.4933C12.049 13.8436 11.9637 13.2136 11.7963 12.6197C11.478 11.4713 10.8809 10.5427 10.1098 10.0013C9.96539 9.89953 9.93258 9.70266 10.0343 9.55828C10.136 9.41391 10.3329 9.3811 10.4773 9.48282C11.3665 10.1095 12.0523 11.1628 12.4099 12.4491C12.5937 13.0955 12.6855 13.7845 12.6855 14.4933C12.6855 15.0839 12.6199 15.6647 12.4887 16.2258C11.9801 18.4373 10.5166 19.9959 8.84648 20.0977C8.78742 20.1042 8.72508 20.1042 8.66602 20.1042Z" fill="#34495C"/>
                                <path d="M8.66588 20.104C7.45182 20.104 7.09416 17.1016 7.01213 16.1796C6.96619 15.6513 6.93994 15.0837 6.93994 14.493C6.93994 13.8138 6.97603 13.1444 7.04166 12.5013C7.17291 11.2479 7.42885 10.2143 7.76682 9.59086C7.84885 9.43664 8.04244 9.37758 8.19666 9.46289C8.35088 9.54492 8.40994 9.73851 8.32463 9.89273C8.0326 10.4341 7.79307 11.4087 7.67494 12.567C7.60932 13.1904 7.5765 13.8368 7.5765 14.493C7.5765 15.064 7.59947 15.612 7.64541 16.1205C7.84885 18.4535 8.41979 19.4641 8.6626 19.4641C8.90869 19.4641 9.47635 18.4535 9.67979 16.1205C9.72572 15.6152 9.74869 15.0673 9.74869 14.4898C9.74869 13.8335 9.71588 13.1871 9.65025 12.5637C9.52885 11.4054 9.2926 10.4309 9.00057 9.88945C8.91854 9.73523 8.97432 9.54164 9.12854 9.45961C9.28275 9.37758 9.47635 9.43336 9.55838 9.58758C9.89307 10.2077 10.1523 11.2413 10.2835 12.498C10.3524 13.1412 10.3853 13.8138 10.3853 14.4898C10.3853 15.0837 10.3623 15.6513 10.3131 16.1763C10.2376 17.0984 9.87994 20.104 8.66588 20.104Z" fill="#34495C"/>
                                <path d="M4.48213 13.2468C4.46244 13.2468 4.44275 13.2468 4.42307 13.2435C3.8751 13.214 3.53385 12.771 3.49775 12.7218C3.39275 12.5807 3.42557 12.3806 3.56666 12.2756C3.70775 12.1706 3.90463 12.2034 4.00963 12.3412C4.01619 12.351 4.20978 12.5938 4.46244 12.607C4.62978 12.6168 4.81025 12.5151 4.99728 12.3149C5.11541 12.187 5.31557 12.1771 5.44353 12.2952C5.47307 12.3215 6.19166 12.9351 7.1826 12.2657C7.28432 12.1968 7.42213 12.1935 7.52713 12.2591C7.56978 12.2854 8.63291 12.9088 9.81744 12.2526C9.90603 12.2034 10.011 12.2001 10.0996 12.2395C10.1095 12.2427 11.2284 12.7284 11.9273 12.2657C11.9995 12.2198 12.0881 12.2034 12.1701 12.2198C12.5179 12.2952 13.1742 12.3674 13.4465 12.2427C13.604 12.1706 13.7943 12.2395 13.8698 12.4002C13.942 12.561 13.8731 12.7481 13.7123 12.8235C13.2562 13.0335 12.4785 12.9252 12.1635 12.8695C11.3662 13.3091 10.3654 13.0204 9.99135 12.8826C8.83307 13.4568 7.78635 13.0893 7.37619 12.899C6.5001 13.4076 5.70932 13.2107 5.2565 12.9449C5.01041 13.1451 4.75119 13.2468 4.48213 13.2468ZM4.38697 16.866C4.37385 16.866 4.36072 16.866 4.35088 16.866C3.84228 16.8496 3.49775 16.4788 3.4026 16.3673C3.39275 16.3574 3.38619 16.3443 3.37635 16.3345C3.28775 16.2065 3.30744 16.0293 3.42557 15.921C3.55682 15.8029 3.75697 15.8127 3.8751 15.9407C3.88166 15.9506 3.8915 15.9604 3.90135 15.9735C3.94728 16.026 4.13432 16.2229 4.37057 16.2327C4.5576 16.2426 4.72822 16.1376 4.92182 15.9374C5.03994 15.8127 5.23682 15.8062 5.36478 15.9177C5.39432 15.944 6.13588 16.5641 7.15963 15.8915C7.26135 15.8226 7.3926 15.8226 7.4976 15.8849C7.54353 15.9112 8.63619 16.5379 9.85353 15.8784C9.93885 15.8324 10.0406 15.8259 10.1324 15.8652C10.1456 15.8718 11.294 16.3574 12.0159 15.8915C12.0848 15.8456 12.1734 15.8291 12.2554 15.8456C12.6131 15.921 13.2857 15.9932 13.5679 15.8685C13.7287 15.7996 13.9157 15.8718 13.9879 16.0326C14.0568 16.1934 13.9846 16.3804 13.8238 16.4526C13.3546 16.6593 12.5638 16.551 12.2488 16.4952C11.4318 16.9382 10.4048 16.6429 10.0274 16.5084C8.83963 17.0859 7.76666 16.7151 7.35322 16.5248C6.45416 17.0366 5.64369 16.8365 5.18432 16.5674C4.9251 16.7643 4.65932 16.866 4.38697 16.866Z" fill="#34495C"/>
                                <path d="M13.683 16.4782C13.6502 16.4782 13.6174 16.4717 13.5846 16.4618C13.4172 16.4061 13.3286 16.2289 13.3844 16.0648V16.0615C13.4238 15.9303 13.5452 15.8351 13.6896 15.8351C13.8667 15.8351 14.0078 15.9762 14.0078 16.1534C14.0078 16.1895 14.0013 16.2256 13.9914 16.2584C13.9455 16.3896 13.8175 16.4782 13.683 16.4782ZM10.9858 10.0634H6.34611C6.16893 10.0634 6.02783 9.9223 6.02783 9.74512V9.10527C6.02783 8.19309 6.76939 7.44824 7.68486 7.44824H9.65033C10.5625 7.44824 11.3074 8.1898 11.3074 9.10527V9.74512C11.3041 9.91902 11.163 10.0634 10.9858 10.0634ZM6.66439 9.42684H10.6675V9.10527C10.6675 8.54418 10.2114 8.0848 9.64705 8.0848H7.68158C7.12049 8.0848 6.66111 8.5409 6.66111 9.10527V9.42684H6.66439Z" fill="#34495C"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_864_1388">
                                    <rect width="21" height="21" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Fragrances</span>
                    </Link>
                    <Link>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.34483 12.1817H7.17773V7.58795C7.17808 7.54502 7.16992 7.50245 7.15374 7.46268C7.13756 7.42292 7.11368 7.38674 7.08346 7.35625C7.05325 7.32575 7.0173 7.30153 6.97768 7.28498C6.93807 7.26843 6.89558 7.25988 6.85264 7.25983H6.60352V4.34772C6.60382 4.28932 6.58846 4.23191 6.55905 4.18147C6.52963 4.13102 6.48723 4.08939 6.43625 4.06089L3.48391 2.42027C3.43382 2.3925 3.37736 2.37825 3.32009 2.37893C3.26282 2.37961 3.20672 2.39518 3.1573 2.42412C3.10787 2.45307 3.06684 2.49438 3.03823 2.54399C3.00963 2.59361 2.99443 2.64982 2.99414 2.70709V7.25983H2.75108C2.66374 7.25971 2.57991 7.29415 2.51787 7.35563C2.45582 7.4171 2.42061 7.50061 2.41992 7.58795V12.1817H2.25889C2.17156 12.1816 2.08772 12.216 2.02568 12.2775C1.96364 12.339 1.92843 12.4225 1.92773 12.5098V17.4727C1.92882 17.7775 2.05058 18.0694 2.26637 18.2847C2.48217 18.4999 2.77443 18.6209 3.07921 18.6212H6.52452C6.82869 18.6207 7.12022 18.4995 7.33501 18.2841C7.5498 18.0687 7.67027 17.7769 7.66992 17.4727V12.5098C7.67026 12.4669 7.66211 12.4243 7.64593 12.3846C7.62975 12.3448 7.60587 12.3086 7.57565 12.2781C7.54543 12.2476 7.50949 12.2234 7.46987 12.2069C7.43026 12.1903 7.38776 12.1818 7.34483 12.1817ZM3.65039 3.2649L5.94727 4.54094V7.25983H3.65039V3.2649ZM3.07617 7.91608H6.52148V12.1817H3.07617V7.91608ZM7.01367 17.4727C7.01394 17.5372 7.0015 17.601 6.97705 17.6607C6.9526 17.7203 6.91662 17.7746 6.87119 17.8203C6.82575 17.866 6.77175 17.9023 6.71226 17.9271C6.65277 17.9519 6.58898 17.9648 6.52452 17.9649H3.07921C2.9484 17.9649 2.82291 17.9131 2.73014 17.8209C2.63736 17.7287 2.58482 17.6035 2.58398 17.4727V12.838H7.01367V17.4727Z" fill="url(#paint0_linear_864_1404)"/>
                            <path d="M5.70117 8.61328C5.61415 8.61328 5.53069 8.64785 5.46915 8.70939C5.40762 8.77092 5.37305 8.85438 5.37305 8.94141V11.2793C5.37305 11.3663 5.40762 11.4498 5.46915 11.5113C5.53069 11.5729 5.61415 11.6074 5.70117 11.6074C5.7882 11.6074 5.87166 11.5729 5.93319 11.5113C5.99473 11.4498 6.0293 11.3663 6.0293 11.2793V8.94141C6.0293 8.85438 5.99473 8.77092 5.93319 8.70939C5.87166 8.64785 5.7882 8.61328 5.70117 8.61328Z" fill="url(#paint1_linear_864_1404)"/>
                            <path d="M6.15234 17.3906C6.23937 17.3906 6.32283 17.3561 6.38436 17.2945C6.4459 17.233 6.48047 17.1495 6.48047 17.0625V13.8223C6.48047 13.7352 6.4459 13.6518 6.38436 13.5902C6.32283 13.5287 6.23937 13.4941 6.15234 13.4941C6.06532 13.4941 5.98186 13.5287 5.92032 13.5902C5.85879 13.6518 5.82422 13.7352 5.82422 13.8223V17.0625C5.82422 17.1495 5.85879 17.233 5.92032 17.2945C5.98186 17.3561 6.06532 17.3906 6.15234 17.3906Z" fill="url(#paint2_linear_864_1404)"/>
                            <path d="M19.0627 6.3162C19.0627 3.42459 16.7137 1.07227 13.8221 1.07227C10.9306 1.07227 8.5837 3.42468 8.5837 6.3162C8.5853 7.23416 8.82747 8.13566 9.28609 8.93085C9.74471 9.72604 10.4037 10.3871 11.1975 10.8482V13.264C10.8385 13.4029 10.495 13.5791 10.1726 13.7895C9.1491 14.4646 8.5835 15.3761 8.5835 16.3561C8.5835 17.3361 9.14627 18.2476 10.1698 18.9228C11.1513 19.5701 12.4495 19.9267 13.826 19.9267C15.2026 19.9267 16.501 19.5701 17.4825 18.9228C18.506 18.2476 19.0698 17.3362 19.0698 16.3561C19.0698 15.3761 18.4992 14.4646 17.4756 13.7895C17.1521 13.579 16.8076 13.4029 16.4475 13.264V10.8482C17.2414 10.3872 17.9007 9.72617 18.3595 8.93099C18.8184 8.13581 19.0608 7.23426 19.0627 6.3162ZM9.2379 6.3162C9.23789 5.40883 9.50695 4.52185 10.011 3.7674C10.5151 3.01296 11.2316 2.42493 12.0699 2.0777C12.9082 1.73046 13.8307 1.63961 14.7206 1.81662C15.6105 1.99364 16.428 2.43057 17.0696 3.07217C17.7112 3.71378 18.1481 4.53123 18.3251 5.42115C18.5021 6.31108 18.4113 7.23351 18.064 8.0718C17.7168 8.91009 17.1288 9.62659 16.3743 10.1307C15.6199 10.6348 14.7329 10.9038 13.8255 10.9038C12.6092 10.9025 11.4432 10.4187 10.5831 9.55862C9.72306 8.69857 9.23928 7.53249 9.2379 6.3162ZM18.4131 16.3563C18.4131 17.1085 17.9541 17.8255 17.1207 18.3752C16.2453 18.9526 15.075 19.2707 13.8254 19.2707C12.5758 19.2707 11.4055 18.9526 10.5301 18.3752C9.69674 17.8256 9.23778 17.1085 9.23778 16.3563C9.23778 15.6041 9.69674 14.8872 10.5301 14.3375C11.4056 13.7601 12.5759 13.442 13.8254 13.442C15.075 13.442 16.2453 13.7601 17.1207 14.3375C17.9543 14.8872 18.4132 15.6042 18.4132 16.3563H18.4131ZM15.7913 13.0458C14.5017 12.6991 13.1434 12.6991 11.8538 13.0458V11.1719C13.1152 11.6895 14.5298 11.6895 15.7913 11.1719V13.0458Z" fill="url(#paint3_linear_864_1404)"/>
                            <path d="M17.4124 6.3168C17.4124 5.6073 17.202 4.91373 16.8078 4.3238C16.4137 3.73387 15.8534 3.27408 15.1979 3.00256C14.5424 2.73105 13.8211 2.66001 13.1253 2.79842C12.4294 2.93684 11.7902 3.2785 11.2885 3.78019C10.7868 4.28189 10.4451 4.92108 10.3067 5.61695C10.1683 6.31282 10.2393 7.03411 10.5109 7.68961C10.7824 8.3451 11.2422 8.90536 11.8321 9.29954C12.422 9.69372 13.1156 9.90411 13.8251 9.90411C14.7762 9.90304 15.688 9.52474 16.3605 8.85223C17.033 8.17971 17.4113 7.26789 17.4124 6.3168ZM10.8941 6.3168C10.8941 5.73709 11.066 5.1704 11.3881 4.68839C11.7101 4.20638 12.1679 3.8307 12.7035 3.60885C13.2391 3.38701 13.8284 3.32897 14.397 3.44207C14.9656 3.55517 15.4878 3.83433 15.8977 4.24425C16.3076 4.65417 16.5868 5.17643 16.6999 5.74501C16.813 6.31358 16.7549 6.90292 16.5331 7.4385C16.3112 7.97408 15.9355 8.43184 15.4535 8.75391C14.9715 9.07597 14.4048 9.24787 13.8251 9.24786C13.048 9.24698 12.303 8.93789 11.7535 8.3884C11.204 7.83891 10.895 7.09389 10.8941 6.3168Z" fill="url(#paint4_linear_864_1404)"/>
                            <defs>
                                <linearGradient id="paint0_linear_864_1404" x1="4.79883" y1="0.984435" x2="4.79883" y2="19.1954" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#00EFD1"/>
                                    <stop offset="1" stop-color="#00ACEA"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_864_1404" x1="5.70117" y1="0.984375" x2="5.70117" y2="19.1953" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#00EFD1"/>
                                    <stop offset="1" stop-color="#00ACEA"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_864_1404" x1="6.15234" y1="0.984376" x2="6.15234" y2="19.1953" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#00EFD1"/>
                                    <stop offset="1" stop-color="#00ACEA"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear_864_1404" x1="13.8266" y1="0.983959" x2="13.8266" y2="19.1949" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#00EFD1"/>
                                    <stop offset="1" stop-color="#00ACEA"/>
                                </linearGradient>
                                <linearGradient id="paint4_linear_864_1404" x1="13.8251" y1="0.984566" x2="13.8251" y2="19.1955" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#00EFD1"/>
                                    <stop offset="1" stop-color="#00ACEA"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <span>Make Up</span>
                    </Link>
                    <Link>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_864_1397)">
                                <path d="M10.4097 14.5238L9.17921 16.1932L7.76828 15.1514C7.44425 14.9135 7.37453 14.4541 7.61242 14.1301L7.97335 13.6379C8.21124 13.3139 8.67062 13.2442 8.99464 13.482L10.4097 14.5238Z" fill="#FFB800"/>
                                <path d="M13.0881 15.7379C12.4154 16.8617 11.4475 18.0635 10.4754 19.0971C9.69609 19.9215 8.37539 19.8969 7.63711 19.0314C7.00547 18.2932 7.04238 17.2021 7.70684 16.4926C8.53125 15.6066 9.35977 14.5566 9.92988 13.5682C10.2375 13.0309 10.1514 12.3541 9.73711 11.8947C8.30156 10.2869 6.64453 8.19512 5.47559 6.46836L7.58789 3.40039C11.0209 4.2043 15.9059 5.94336 17.2389 6.86211C19.2814 8.26894 19.7941 11.0621 18.3873 13.1047C17.4604 14.4459 15.9264 15.1309 14.4047 15.0324C13.8674 14.9996 13.367 15.2744 13.0881 15.7379Z" fill="white"/>
                                <path d="M7.58798 3.40032L5.47568 6.46008L2.45282 5.95969C1.98115 5.88176 1.74736 5.33625 2.02216 4.9425L4.94247 0.709692C5.21318 0.315942 5.8038 0.33645 6.04579 0.750708L7.58798 3.40032Z" fill="#FFB800"/>
                                <path d="M14.7165 12.7846C15.9646 12.7846 16.9765 11.7728 16.9765 10.5246C16.9765 9.27647 15.9646 8.26465 14.7165 8.26465C13.4684 8.26465 12.4565 9.27647 12.4565 10.5246C12.4565 11.7728 13.4684 12.7846 14.7165 12.7846Z" fill="#FFB800"/>
                                <path d="M17.4849 6.50887C16.1396 5.58191 11.4269 3.87977 7.87081 3.02664L6.42296 0.536993C6.02921 -0.139765 5.05714 -0.197187 4.59366 0.467266L1.67335 4.70008C1.22218 5.35223 1.60362 6.25457 2.38702 6.38172L5.2294 6.8534C6.34913 8.49402 7.94054 10.5161 9.4171 12.1731C9.71241 12.5054 9.76983 12.977 9.55655 13.3503C9.55655 13.3544 9.55245 13.3585 9.55245 13.3626L9.24894 13.1411C8.73624 12.7638 8.01026 12.8745 7.62882 13.3872L7.26788 13.8753C6.88644 14.3921 6.99718 15.118 7.51397 15.4954L7.82159 15.7251C7.68214 15.885 7.54269 16.045 7.39503 16.2009C6.66085 16.9884 6.56241 18.1532 7.11202 19.035C6.70597 19.597 6.11124 19.9743 5.42628 20.1014C4.72081 20.2327 4.00714 20.0768 3.41651 19.6708C2.19425 18.83 1.88663 17.1565 2.72745 15.9302L4.32706 13.6087C4.46241 13.4118 4.41319 13.1452 4.21632 13.0139C4.02354 12.8786 3.75284 12.9278 3.62159 13.1247L2.02198 15.4462C0.910459 17.054 1.31241 19.2606 2.92843 20.3721C3.69542 20.9013 4.63878 21.1145 5.58214 20.9423C6.43116 20.7864 7.17354 20.3352 7.70675 19.6708C8.66651 20.3804 9.98722 20.245 10.7911 19.3919C11.8739 18.2434 12.8214 17.0253 13.4612 15.9589C13.6581 15.6307 14.0067 15.438 14.38 15.4626C16.0944 15.5733 17.7679 14.7612 18.7441 13.3503C20.278 11.1149 19.7161 8.04695 17.4849 6.50887ZM2.37882 5.18816L5.29913 0.955352C5.39347 0.820001 5.59854 0.828204 5.68058 0.971759L7.08331 3.38348L5.28272 5.99617L2.53058 5.5409C2.36241 5.51219 2.28448 5.32352 2.37882 5.18816ZM8.02257 14.8063C7.88722 14.7079 7.85851 14.5192 7.95694 14.3839L8.31788 13.8958C8.41632 13.7645 8.60499 13.7317 8.74034 13.8302L9.09308 14.0886C8.87569 14.4085 8.6337 14.7366 8.3712 15.0647L8.02257 14.8063ZM18.0345 12.8622C17.2306 14.027 15.8525 14.6956 14.4333 14.6054C13.7401 14.5602 13.0839 14.9089 12.723 15.5159C12.1159 16.529 11.2095 17.6979 10.1677 18.8013C9.57296 19.4329 8.54757 19.437 7.96925 18.752C7.48526 18.1819 7.50987 17.337 8.02667 16.7833C8.95772 15.7866 9.76573 14.7202 10.3071 13.7768C10.705 13.0837 10.6066 12.21 10.0651 11.603C8.6378 10.0034 7.10382 8.05516 6.0046 6.46375L7.18175 4.7575L7.78468 3.88387C11.1931 4.71238 15.7663 6.35711 17.005 7.21434C18.8384 8.48582 19.306 11.0165 18.0345 12.8622Z" fill="#030303"/>
                                <path d="M14.7163 7.83789C13.2356 7.83789 12.0298 9.04375 12.0298 10.5244C12.0298 12.0051 13.2356 13.2109 14.7163 13.2109C16.197 13.2109 17.4028 12.0051 17.4028 10.5244C17.4028 9.04375 16.2011 7.83789 14.7163 7.83789ZM14.7163 12.3578C13.7073 12.3578 12.887 11.5375 12.887 10.5285C12.887 9.51953 13.7073 8.69922 14.7163 8.69922C15.7253 8.69922 16.5456 9.51953 16.5456 10.5285C16.5497 11.5375 15.7253 12.3578 14.7163 12.3578Z" fill="#030303"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_864_1397">
                                    <rect width="21" height="21" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Hair Beauty</span>
                    </Link>
                    <Link>Others</Link>
                </div>
                <div>
                    
                </div>
            </div>
            <div>
                <div>
                    <p>Categories</p>
                    <p>view all</p>
                </div>
                <div>
                    <Link  className="pink">
                        <div>
                            <img src="*" alt="banner"/>
                        </div>
                        <p>Bath and Body</p>
                    </Link>
                    <Link  className="orange">
                        <div>
                            <img src="*" alt="banner"/>  
                        </div>
                        <p>Fragrance</p>
                    </Link>
                    <Link  className="yellow">
                        <div>
                            <img src="*" alt="banner"/>
                        </div>
                        <p>Skin Care</p>
                    </Link>
                    <Link  className="beige">
                        <div>
                            <img src="*" alt="banner"/>
                        </div>
                        <p>Make Up</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}