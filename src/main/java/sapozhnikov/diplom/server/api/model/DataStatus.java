package sapozhnikov.diplom.server.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@AllArgsConstructor
@Table(name = "data_status")
@NoArgsConstructor(force = true)
@Data
public class DataStatus {

    @Id
    private Long id;

    private int softInterruptsCount;
    private int activeUserSystem;
    private double cpuTemp;
    private double gpuTemp;
    private double cpuPercentUsage;
    private double virtualMemoryPercentUsage;
    private double diskPercentUsage;

    @Override
    public String toString() {
        return "DataStatus{" +
                "id=" + id +
                ", softInterruptsCount=" + softInterruptsCount +
                ", activeUserSystem=" + activeUserSystem +
                ", cpuTemp=" + cpuTemp +
                ", gpuTemp=" + gpuTemp +
                ", cpuPercentUsage=" + cpuPercentUsage +
                ", virtualMemoryPercentUsage=" + virtualMemoryPercentUsage +
                ", diskPercentUsage=" + diskPercentUsage +
                '}';
    }
}
