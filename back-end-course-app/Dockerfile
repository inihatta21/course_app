FROM python:3.12-bookworm

# Tentukan direktori kerja di dalam container
WORKDIR /src

# Mencegah pembuatan file .pyc dan mem-buffer output log
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    UV_SYSTEM_PYTHON=1

# Install dependency tingkat OS
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Pasang UV
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# Copy file requirements & install dependensi Python
COPY requirements.txt .
RUN uv pip install --system -r requirements.txt

# Copy seluruh kode proyek ke /src di container
COPY . .

EXPOSE 8000

# Jalankan server Django dengan python3
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]