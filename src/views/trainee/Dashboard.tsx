import { getGymList } from 'api';
import { DESC_LIMIT } from 'constants';
import { MAIN_MENU } from 'constants/menu';
import { IGym } from 'interfaces';
import { FA_IR } from 'language';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { limitString } from 'utils/string';

const Dashboard = () => {
  const { data: gyms } = useQuery(
    ['gym-list'],
    getGymList,
  );

  return (
    <section className="bg-gray-50 h-screen w-screen relative overflow-hidden">
      <header className="h-14 bg-primary">
        <h2 className="text-xl h-full text-center flex justify-center items-center text-gray-100 font-semibold">
          {FA_IR.Dambel}
        </h2>
      </header>
      <section className="p-4 relative">
        <input
          type="search"
          className="input w-full"
          placeholder={FA_IR.Search}
        />
        <button className="absolute top-1/2 -translate-y-1/2 left-6 p-2">
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
        </button>
      </section>
      <ul className="p-4 space-y-4">
        {gyms?.map((gym: IGym, index: number) => (
          <li
            className="card w-full bg-white py-3 px-4 shadow-md text-right"
            key={`${gym.gym_owner.id} ${index}`}
          >
            <article>
              <h2 className="text-lg font-semibold mb-1 mr-4">
                {gym.name}
              </h2>
              <p className="text-sm">
                <i className="fa-solid fa-location-dot ml-2" />
                {gym.address}
              </p>
              <p className="text-sm flex">
                <i className="fa-solid fa-feather-pointed ml-1" />
                <span>
                  {limitString(
                    gym.description,
                    DESC_LIMIT,
                  )}
                </span>
              </p>
            </article>
          </li>
        ))}
      </ul>

      <footer className="md:hidden fixed bottom-0 left-0 w-full p-3">
        <ul className="bg-white w-full h-12 rounded-lg flex justify-around  items-center">
          {MAIN_MENU.map((item) => (
            <li key={item.name} className='text-2xl'><i className={item.icon} /></li>
          ))}
        </ul>
      </footer>
    </section>
  );
};

export default Dashboard;
