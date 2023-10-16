import Image from "next/image";
import tick from '../../../public/tick.svg';
import styles from './features.module.scss';

interface FeatureProps {
  features: string[]
}

export default function Features({ features }: FeatureProps) {

  let elements = features.map((feature) => {
    return (
      <div className={styles.feature} key={feature}>
        <Image src={tick} alt='' width={25} height={25} />
        <p>{feature}</p>
      </div>
    )
  })

  return (
    <div className={styles.features}>
      {elements}
    </div>
  )
}