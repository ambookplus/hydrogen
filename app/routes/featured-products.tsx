import {json, type LoaderArgs} from '@hydrogen/remix';
import {getFeaturedData} from '~/data';

export async function loader({params}: LoaderArgs) {
  return json(await getFeaturedData({params}));
}