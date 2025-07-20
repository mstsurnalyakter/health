import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllAdmin = async (params: any) => {
const {search,...filterData} = params

  console.log({ filterData });
  const addCondition:Prisma.AdminWhereInput[] = [];
  



 const adminSearchAbleFiel = ['name','email'];

  if (params.search) {
    addCondition.push({
      OR: adminSearchAbleFiel.map(field=>({
        [field]: {
            contains: params.search,
            mode: "insensitive",
          },
      }))
    });
  }
console.log(Object.keys(filterData))
const ObjectKey = Object.keys(filterData);
  if (ObjectKey.length > 0) {
    addCondition.push({
        AND:ObjectKey.map(key=>({
            [key]:{
                equals:filterData[key]
            }
        }))
    })
  }

  console.dir(
    addCondition,
    {
        depth:'inifinity'
    }
  )

  const whereConditions: Prisma.AdminWhereInput = { AND: addCondition };

  const result = await prisma.admin.findMany({
    where: whereConditions,
  });
  return result;
};

export const AdminService = {
  getAllAdmin,
};
