-- CreateTable
CREATE TABLE "vaccines_administered" (
    "id" UUID NOT NULL,
    "vaccine_id" UUID NOT NULL,
    "pet_id" UUID NOT NULL,
    "date_administered" TIMESTAMP(3) NOT NULL,
    "next_dose_due" TIMESTAMP(3) NOT NULL,
    "vet_administered" TEXT NOT NULL,
    "comments" TEXT NOT NULL,

    CONSTRAINT "vaccines_administered_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vaccines" (
    "id" UUID NOT NULL,
    "vaccine_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "administration_route" TEXT NOT NULL,
    "vet_recommendations" TEXT NOT NULL,
    "side_effects" TEXT NOT NULL,
    "shelf_life" TEXT NOT NULL,
    "package_insert" TEXT NOT NULL,

    CONSTRAINT "vaccines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pet_exams" (
    "id" UUID NOT NULL,
    "pet_id" UUID NOT NULL,
    "exame_id" UUID NOT NULL,
    "date_performed" TIMESTAMP(3) NOT NULL,
    "vet_performed" TEXT NOT NULL,
    "contact_vet" TEXT NOT NULL,
    "results" TEXT NOT NULL,
    "comments" TEXT NOT NULL,

    CONSTRAINT "pet_exams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exams" (
    "id" UUID NOT NULL,
    "exameName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "vet_recommendations" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "normal_range" TEXT NOT NULL,
    "package_insert" TEXT NOT NULL,

    CONSTRAINT "exams_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "vaccines_administered" ADD CONSTRAINT "vaccines_administered_vaccine_id_fkey" FOREIGN KEY ("vaccine_id") REFERENCES "vaccines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vaccines_administered" ADD CONSTRAINT "vaccines_administered_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pet_exams" ADD CONSTRAINT "pet_exams_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pet_exams" ADD CONSTRAINT "pet_exams_exame_id_fkey" FOREIGN KEY ("exame_id") REFERENCES "exams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
