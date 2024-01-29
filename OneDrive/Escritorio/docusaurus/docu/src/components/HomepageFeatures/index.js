import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'inscripcion',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ¡Inscríbete en SENATI y transforma tu futuro!
      </>
    ),
  },
  {
    title: 'cronograma',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        El cronograma SENATI es un calendario que indica las fechas clave para las diferentes etapas del proceso educativo en SENATI.
      </>
    ),
  },
  {
    title: 'validacion de datos',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        La validación de datos en SENATI es un proceso sencillo que te permite confirmar que la información que has proporcionado al registrarte o actualizar tu perfil es correcta y actualizada.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
