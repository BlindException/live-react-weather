export function moonSelector(moonPhase) {
    let moonURL='';
    switch (moonPhase) {
                case 'New Moon': moonURL= "./New_Moon.png"; break;
                case 'Full Moon': moonURL= "./Full_Moon.png"; break;
                case 'Third Quarter': moonURL= "./Last_Quarter_Moon.png"; break;
                case 'First Quarter': moonURL= "./First_Quarter_Moon.png"; break;
                case 'Waning Gibbous': moonURL= "./Waning_Gibbous_Moon.png"; break;
                case 'Waxing Gibbous': moonURL= "./Waxing_Gibbous_Moon.png"; break;
                case 'Waning Crescent': moonURL= "./Waning_Crescent_Moon.png"; break;
                case 'Waxing Crescent': moonURL= "./Waxing_Crescent_Moon.png"; break;
        default: moonURL= "./Moon.png";
        }   
        return moonURL;
       }