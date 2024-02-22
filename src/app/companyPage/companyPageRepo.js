import { client } from "./db";
import { NextResponse } from "next/server";

// export async function getCompany({companyName}) {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       var query = {id:companyName}
//       const result = await client.db("User").collection('Companies').find(query);

//       console.log("Retrived Successfully");
//       await client.close();
//       return NextResponse.json({result});
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("User"); // Replace 'your_database_name' with your actual database name
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
}

export async function getCompanyById(id) {
  const db = await connectToDatabase(id);
  const companiesCollection = db.collection("companies");

  try {
    const company = await companiesCollection.findOne({ id: id });
    return company;
  } catch (error) {
    console.error("Error retrieving company", error);
    throw error;
  }
}
