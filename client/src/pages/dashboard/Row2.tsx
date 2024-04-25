import DashboardBox from "@/components/DashboardBox";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";

const Row2 = () => {
  const { data: kpisData } = useGetKpisQuery();
  console.log("🚀 ~ Row2 ~ kpisData:", kpisData);

  const { data: productsData } = useGetProductsQuery();
  console.log("🚀 ~ Row2 ~ productsData:", productsData);

  const { data: transactionsData } = useGetTransactionsQuery();
  console.log("🚀 ~ Row2 ~ transactionsData:", transactionsData);

  return (
    <>
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  );
};

export default Row2;
