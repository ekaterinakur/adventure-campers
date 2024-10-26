import CamperList from '../../components/CamperList/CamperList';
import Filters from '../../components/Filters/Filters';
import styles from './CatalogPage.module.scss';

const CatalogPage = () => {
  return (
    <div className="container">
      <div className={styles.catalogContainer}>
        <h1 className="visually-hidden">Camper list</h1>
        <div className={styles.filtersContainer}>
          <Filters />
        </div>
        <div className={styles.listContainer}>
          <CamperList />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
