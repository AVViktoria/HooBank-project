import { clients } from "../constants";
import styles from "../styles";

const Clients = () => (
  <section className={`${styles.flexCenter} mt-4 `}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px]  min-w-[120px] m-5 `}
          key={client.id}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
