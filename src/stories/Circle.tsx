type Props = {
  variant: 'orange' | 'green' | 'yellow';
}

/**
 * 円のUIコンポーネント
 * */
const Circle = ({variant}: Props) => {
  let bgColor;

  switch (variant) {
    case 'orange':
      bgColor = 'bg-orange-500';
      break;
    case 'green':
      bgColor = 'bg-green-500';
      break;
    case 'yellow':
      bgColor = 'bg-yellow-500';
      break;
  }

  return (
    <div className={`w-10 h-10 ${bgColor} rounded-full`}></div>
  )
}

export default Circle