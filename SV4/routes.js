import express from 'express';

const router = express.Router();

import { router as routerFromwaAck } from "./waAck/routes.js";
import { router as routerFromBillItemsTable } from "./BillItemsTable/routes.js";
import { router as routerFromBillsTable } from "./BillsTable/routes.js";

router.use("/waAck", routerFromwaAck);
router.use("/BillItemsTable", routerFromBillItemsTable);
router.use("/BillsTable", routerFromBillsTable);

export { router };